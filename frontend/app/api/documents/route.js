export async function GET(req) {
  try {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    console.log('API_URL:', API_URL);
    const response = await fetch(`${API_URL}/api/legal-documents/`, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) throw new Error('Ошибка загрузки файлов');

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error(err);

    return new Response(JSON.stringify({ error: 'Ошибка загрузки файлов' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}