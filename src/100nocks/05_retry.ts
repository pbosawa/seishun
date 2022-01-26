//05. n-gram
let arr: string[][] = new Array();
function ngram(n: number, lst: string[]): string[] {
  return [];
}
const str: string = "I am a NLPer";
let splitWords: string[] = str.split(" ");
let splitChars = str.split("").filter((item) => item.match(/ /) == null);

for (let i = 0; i < splitWords.length; i++) {
  arr[i] = new Array();
  i - 1;
  for (let j = 0; j < splitWords.length; j++) {
    arr[i][j] = splitWords[j];
    // i - i;
  }
}

// 単語ごと、文字ごとに分割
const wordsBiGram = ngram(2, splitWords);
const charsBiGram = ngram(2, splitChars);

console.log(arr);
console.log(splitChars);
