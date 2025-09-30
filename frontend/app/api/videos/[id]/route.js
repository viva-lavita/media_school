export async function GET(request, { params }) {
 const { id } = await params;
 try {
  let allResults = [];
  let currentNextUrl = '';
  let nextUrl = `http://217.114.11.243/api/v1/content/videos/?catalog=${id}`;

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

   const sampleImage = 'https://via.placeholder.com/300x200?text=Video+Preview';
   const sampleVideo = 'https://www.w3schools.com/html/mov_bbb.mp4';

   const transformedResults = data.results.map((video) => ({
    imageUrl: sampleImage,
    videoUrl: sampleVideo,
    title: `Видео ${video.id}`,
    date: new Date().toLocaleDateString('ru-RU'),
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
  console.error('Error fetching videos:', error.message);
  return new Response(JSON.stringify({ error: error.message }), {
   status: 500,
   headers: {
    'Content-Type': 'application/json; charset=utf-8',
   },
  });
 }
}
