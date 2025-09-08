export default function formatAnswer(answer) {
 let remainder = answer % 100;

 if ((remainder >= 11 && remainder <= 14) || answer === 0) {
  return `${answer} ответов`;
 }

 remainder = answer % 10;

 switch (remainder) {
  case 1:
   return `${answer} ответ`;
  case 2:
  case 3:
  case 4:
   return `${answer} ответа`;
  default:
   return `${answer} ответов`;
 }
}
