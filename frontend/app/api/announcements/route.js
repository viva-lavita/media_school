export async function GET() {
  try {
    let allResults = [];
    let nextUrl = 'http://217.114.11.243/api/v1/events/announcements/';

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
    console.error('Error fetching announcements:', error);
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
