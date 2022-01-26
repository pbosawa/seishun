import { error } from "console";

const judgeAge = (age: number) => {
  if (age < 3 && age > 0) {
    return "エケチェン";
  } else if (age < 18 && age >= 3) {
    return "子ども";
  } else if (age > 18 && age <= 65) {
    return "大人";
  } else if (age > 65) {
    return "お年寄り";
  } else if (age < 0) {
    return "errror is detected";
  }
};
console.log(judgeAge(2));
console.log(judgeAge(3));
console.log(judgeAge(19));
console.log(judgeAge(77));
console.log(judgeAge(-8));

const fizzBuzz = (num: number) => {
  if (num % 3 == 0 && num % 5 == 0) {
    return "fizzbuzz";
  }
  if (num % 3 == 0) {
    return "fizz";
  } else if (num % 5 == 0) {
    return "buzz";
  }

  return num;
};
for (let i = 0; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
