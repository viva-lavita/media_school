export async function GET(request, { params }) {
 const { id } = await params;
 const url = new URL(request.url);
 const page = parseInt(url.searchParams.get('page')) || 1;
 const limit = parseInt(url.searchParams.get('limit')) || 10;

 try {
  const response = await fetch(`http://217.114.11.243/api/content/documents/?catalog=${id}`, {});

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
    createdAt: new Date().toISOString(),
    extension: extension,
    fileUrl: doc.file,
   };
  });

  const totalCount = transformedResults.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedResults = transformedResults.slice(startIndex, endIndex);

  const paginatedData = {
   count: totalCount,
   next: endIndex < totalCount ? `${request.url}?page=${page + 1}&limit=${limit}` : null,
   previous: page > 1 ? `${request.url}?page=${page - 1}&limit=${limit}` : null,
   results: paginatedResults,
  };

  return new Response(JSON.stringify(paginatedData), {
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
