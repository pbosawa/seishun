// 07.テンプレートによる文生成
function createSentence(x: number, y: string, z: number) {
  return x + "時の" + y + "は" + z;
}

const checkResult = createSentence(12, "気温", 22.4);
console.log(checkResult);
