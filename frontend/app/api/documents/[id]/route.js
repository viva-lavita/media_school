export async function GET(request, { params }) {
 const { id } = await params;
 try {
  let allResults = [];
  let currentNextUrl = '';
  let nextUrl = `http://217.114.11.243/api/v1/content/documents/?catalog=${id}`;

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
   const transformedResults = data.results.map((doc) => {
    const url = decodeURIComponent(doc.file);
    const filename = url.split('/').pop();
    const extension = filename.split('.').pop().toLowerCase();
    const name = filename.replace('.' + extension, '');
    const format = extension.toUpperCase();

    return {
     id: doc.id,
     name: name,
     createdAt: new Date(),
     extension: extension,
     fileUrl: doc.file,
    };
   });

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
  console.error('Error fetching documents:', error.message);
  return new Response(JSON.stringify({ error: error.message }), {
   status: 500,
   headers: {
    'Content-Type': 'application/json; charset=utf-8',
   },
  });
 }
}
