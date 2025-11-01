async function fetchWithRetry(url, options, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      } else if (response.status === 502 || response.status >= 500) {
        if (i < retries - 1) {
          await new Promise(resolve => setTimeout(resolve, delay * (2 ** i)));
          continue;
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay * (2 ** i)));
    }
  }
}

export async function GET() {
 const API_URL = process.env.NEXT_PUBLIC_API_URL;
 try {
  let allResults = [];
  let currentNextUrl = '';
  let nextUrl = `${API_URL}/api/content/catalogs/`;

  while (nextUrl && nextUrl !== currentNextUrl) {
   currentNextUrl = nextUrl;
   const response = await fetchWithRetry(nextUrl, {});
   const data = await response.json();
   allResults = allResults.concat(data.results);
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
  console.error('Error fetching categories:', error);
  return new Response(JSON.stringify({ count: 0, next: null, previous: null, results: [] }), {
   status: 200,
   headers: {
    'Content-Type': 'application/json; charset=utf-8',
   },
  });
 }
}
