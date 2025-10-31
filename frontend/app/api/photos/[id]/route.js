import { formatDate } from '@/app/utils/formatDate';

export async function GET(request, { params }) {
 const { id } = await params;
 const API_URL = process.env.NEXT_PUBLIC_API_URL;
 try {
  let allResults = [];
  let currentNextUrl = '';
  let nextUrl = `${API_URL}/api/v1/content/photos/?catalog=${id}`;

  while (nextUrl && nextUrl !== currentNextUrl) {
   currentNextUrl = nextUrl;
   const response = await fetch(nextUrl, {});

   if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
   }

   const contentType = response.headers.get('Content-Type');
   if (!contentType.includes('application/json')) {
    throw new Error(
     `Invalid Content Type received: ${contentType}. Expected application/json.`
    );
   }

   const data = await response.json();

   const transformedResults = data.results
    .filter(photo => photo.images && photo.images.length > 0 && photo.title)
    .map((photo) => ({
     imageUrl: photo.images[0].image,
     videoUrl: '',
     title: photo.title,
     date: formatDate(photo.created_at),
     categoryName: photo.category ? photo.category.name : '',
     photoCount: photo.images.length,
     images: photo.images,
     isVideo: false,
    }));

   allResults = allResults.concat(transformedResults);
   nextUrl = data.next || null;
  }

  const aggregatedData = {
   count: allResults.length,
   next: null,
   previous: null,
   results: allResults,
  };

  return new Response(JSON.stringify(aggregatedData), {
   status: 200,
   headers: {
    'Content-Type': 'application/json; charset=utf-8',
   },
  });
 } catch (error) {
  console.error('Error fetching photos:', error.message);
  return new Response(JSON.stringify({ error: error.message }), {
   status: 500,
   headers: {
    'Content-Type': 'application/json; charset=utf-8',
   },
  });
 }
}
