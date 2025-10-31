export async function GET(request, { params }) {
  const { id } = await params;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await fetch(`${API_URL}/api/v1/events/competitions/${id}/`, {
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
    console.error('Error fetching contest detail:', error);
    return new Response(JSON.stringify({ error: 'Not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}
