// 09.Typoglycemia
const eibun: string =
  "I couldn't believe that I could actually understand what I was reading the phenomenal power of the human mind";

const splitEibun: string[] = eibun.split(" ");
console.log(splitEibun);
for (const tmp of splitEibun) {
  if (tmp.length >= 4) {
    //先頭と末尾の文字を残して並び変える

    // console.log(tmp + `先頭： ${tmp.slice(0, 1)} : 末尾: ${tmp.slice(-1)}`);
    const arr: string[] = tmp.slice(1, tmp.length - 1).split("");
    const arr1 = tmp.slice(0, 1);
    const arr2 = arr.reverse().join("");
    const arr3 = tmp.slice(-1);
    // console.log(tmp + " 並び変え： " + arr1 + arr2 + arr3);

    const reversedEibun = arr1 + arr2 + arr3;
    reversedEibun.split(/\n/);
    console.log(reversedEibun.split(/\n/).join(" "));

    // console.log(tmp + `： ${arr.reverse()}`);
    // const a = tmp.slice(1, tmp.length - 1);
    // console.log(a);
    // console.log(tmp.slice(0, 1));
    // console.log(tmp.slice(-1));
  }
}
