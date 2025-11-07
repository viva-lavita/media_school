export async function GET() {
  try {
    let allResults = [];
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    let nextUrl = `${API_URL}/api/events/news/`;

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

    // Replace backend URLs with production domain for images
    for (let i = 0; i < allResults.length; i++) {
      const item = allResults[i];
      if (item.image) {
        item.image = item.image.replace('https://backend:8000', 'https://xn--80adiapjcmrmbljehl.xn--p1ai');
      }
      if (item.paragraphs) {
        for (let j = 0; j < item.paragraphs.length; j++) {
          const paragraph = item.paragraphs[j];
          if (paragraph.image) {
            paragraph.image = paragraph.image.replace('https://backend:8000', 'https://xn--80adiapjcmrmbljehl.xn--p1ai');
          }
        }
      }
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
    console.error('Error fetching news:', error);
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
