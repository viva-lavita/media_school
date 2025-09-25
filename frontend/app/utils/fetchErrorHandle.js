export default async function handleFetch(url) {
 try {
  const response = await fetch(url);
  if (!response.ok) {
   throw new Error(`Ошибка HTTP! Статус: ${response.status}`);
  }
  return await response.json();
 } catch (err) {
  console.error(err.message);
  alert('Возникла ошибка при загрузке данных');
  throw err;
 }
}
