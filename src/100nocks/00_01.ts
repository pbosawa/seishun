// 00.文字列の逆順

import { countReset } from "console";

// まずは順番通り取得
const characterStr: string = "stressed";
const character: string[] = characterStr.split("");
console.log("要素数は" + character.length);

for (let i: number = 0; i < character.length; i++) {
  process.stdout.write(character[i]);
}
console.log("");

// 逆順で取得
for (let i = character.length - 1; i >= 0; i--) {
  process.stdout.write(character[i]);
}
console.log("");

// 01.「パタトクカシー」
const patatokukashyStr: string = "パタトクカシー";
const patatokukashy: string[] = patatokukashyStr.split("");

for (let i: number = 0; i < patatokukashy.length; i++) {
  process.stdout.write(patatokukashy[i]);
}
console.log("");
// 1,3,5,7文字目を取り出して連結
for (let i: number = 0; i < patatokukashy.length; i++) {
  if (i % 2 == 0) {
    process.stdout.write(patatokukashy[i]);
  }
}
