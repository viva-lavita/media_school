export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const newsId = searchParams.get('news') || '';
    const ordering = searchParams.get('ordering') || '';

    let backendUrl = `http://217.114.11.243/api/v1/events/comments/?news=${newsId}`;
    if (ordering) {
      backendUrl += `&ordering=${ordering}`;
    }

    const response = await fetch(backendUrl, {
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

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return new Response(JSON.stringify({
      count: 0,
      next: null,
      previous: null,
      results: []
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}
