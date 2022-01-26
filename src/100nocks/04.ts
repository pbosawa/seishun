// 04.元素記号
const es =
  "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.";
const elementSymbol = es.split(" ");
console.log(elementSymbol.length);
console.log(elementSymbol);
// ↑mapで取り出すと速いかも？
let key = [0, 4, 5, 6, 7, 8, 14, 15, 18];
let suiheribe: { [index: number]: string } = {};

for (let i: number = 0; i < elementSymbol.length; i++) {
  if (i in key) {
    suiheribe[i] = elementSymbol[i].charAt(0);
  } else {
    suiheribe[i] = elementSymbol[i].substring(0, 2);
  }
}
console.log(suiheribe);
