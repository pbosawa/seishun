function cipher(target: string): string {
  const tmp: string[] = target.split("");
  const reg = new RegExp(/^[a-z]+$/);

  const a = tmp
    .reduce<string[]>((result: string[], char: string) => {
      if (reg.test(char)) {
        const point: number | undefined = char.codePointAt(0);
        if (!point) throw new Error("invalid");
        const encrypt = 219 - point;
        return [...result, String.fromCodePoint(encrypt)];
      } else {
        return [...result, char];
      }
    }, [])
    .join("");

  // console.log(a);

  return a;
}
function decode(cipher: string): string {
  const tmp: string[] = cipher.split("");
  const reg = new RegExp(/^[a-z]+$/);

  const b = tmp
    .reduce<string[]>((result: string[], char: string) => {
      if (reg.test(char)) {
        const point: number | undefined = char.codePointAt(0);
        if (!point) throw new Error("invalid");
        const decrypt = 219 - point;
        return [...result, String.fromCodePoint(decrypt)];
      } else {
        return [...result, char];
      }
    }, [])
    .join("");

  // console.log(b);
  return b;
}

const sent = "I am a Hero but destroyed the world";
console.log(cipher(sent));
console.log(decode(cipher(sent)));

// console.log(cipher(sent));
// console.log(decode(sent));
// console.log(decode());
// decode(cipher);
