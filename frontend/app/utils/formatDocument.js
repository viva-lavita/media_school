export default function formatDocument(count) {
 let remainder = count % 100;

 if ((remainder >= 11 && remainder <= 14) || count === 0) {
  return `${count} документов`;
 }

 remainder = count % 10;

 switch (remainder) {
  case 1:
   return `${count} документ`;
  case 2:
  case 3:
  case 4:
   return `${count} документа`;
  default:
   return `${count} документов`;
 }
}
