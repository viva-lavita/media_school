export async function GET() {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    let allResults = [];
    let nextUrl = `${API_URL}/api/v1/events/competitions/`;

    while (nextUrl) {
      const response = await fetch(nextUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Accept-Charset': 'utf-8',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      allResults = allResults.concat(data.results);
      nextUrl = data.next;
    }

    const aggregatedData = {
      count: allResults.length,
      next: null,
      previous: null,
      results: allResults
    };

    return new Response(JSON.stringify(aggregatedData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error fetching contests:', error);
    return new Response(JSON.stringify({
      count: 0,
      next: null,
      previous: null,
      results: []
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}
