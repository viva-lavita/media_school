export async function GET() {
  const apiKey = process.env.YANDEX_API_KEY;
  const response = await fetch(`https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`)

  const js = await response.text()
  return new Response(js, {
    headers: {'Content-Type': 'application/javascript; charset=utf-8'}
  })
}