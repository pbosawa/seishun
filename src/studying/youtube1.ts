const max = (x: number, y: number) => {
  if (x < y) {
    return y;
  }
  return x;
};

const value = max(5, 2000);
console.log(value);
