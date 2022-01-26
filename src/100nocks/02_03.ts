// 02.「パトカー」＋「タクシー」＝「パタトクカシーー」
const policeCar = ["パ", "ト", "カ", "ー"];
const taxi = ["タ", "ク", "シ", "ー"];

for (let i: number = 0; i < policeCar.length; i++) {
  if (i % 2 == 0) {
    process.stdout.write(policeCar[i]);
    process.stdout.write(taxi[i]);
  }
  if (i % 2 != 0) {
    process.stdout.write(policeCar[i]);
    process.stdout.write(taxi[i]);
  }
}
console.log("");

// 03.円周率
const bunsyou =
  "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.";

const words = bunsyou.split(" ");
console.log(words.length);

for (let i = 0; i < words.length; i++) {
  process.stdout.write(words[i]);
  process.stdout.write(" ");
}
console.log(words[3].length);

for (let i = 0; i < words.length; i++) {
  const charLength = words[i].length;
  console.log(charLength);
}
