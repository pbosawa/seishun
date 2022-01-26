//05. n-gram
const ngramSentence = "I am a NLPer";
// 要素を1文字ずつ配列へ
const splitNgramWithBlank = ngramSentence.split("");
// 空白以外を抽出
var splitNgram = splitNgramWithBlank.filter((item) => item.match(/ /) == null);
console.log(splitNgram); //uni-gram
let ngra: string[];
for (let i = 0; i < splitNgram.length; i++) {
  let ngra = [splitNgram[i]];
  let index: number = 0;
  for (let i = 0; i < ngra.length; i++) {
    index = i += i;
    let ngra: string[] = [splitNgram[index]];
    console.log(ngra);
  }
}
