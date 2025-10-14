export default function formatDocument(count) {
 let remainder = count % 100;

 if ((remainder >= 11 && remainder <= 14) || count === 0) {
  return `${count} файлов`;
 }

 remainder = count % 10;

 switch (remainder) {
  case 1:
   return `${count} файл`;
  case 2:
  case 3:
  case 4:
   return `${count} файла`;
  default:
   return `${count} файлов`;
 }
}
