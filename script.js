//8. Նկարագրել ֆունկցիա, որն արգումենտում ստանում է իրական թվերի զանգված և վերադարձնում է՝

//ա) true, եթե զանգվածը պարունակում է կրկնվող տարրեր, և վերադարձնում է false՝ հակառակ դեպքում,

// function irakanTver(arr) {
//   let str = arr.join("");
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(irakanTver([5, 6, 7, 1, 9, 4, 7, 3]));

// բ) այն տարրերի քանակը, որոնք զանգվածում հանդիպում են ճիշտ 1 անգամ:

// function irakanTver(arr) {
//   let count = 0;
//   let str = arr.join("");
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// irakanTver([5, 6, 7, 4, 4, 7, 3]);
