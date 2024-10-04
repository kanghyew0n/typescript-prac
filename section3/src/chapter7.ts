// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
// 타입을 상황에 따라 좁히는 방법

type Person = {
  name: string;
  age: string;
};

// value => number: toFixed
// value => string: toUpperCase
// value => Date: getTime
function foo(value: number | string | Date | null | Person) {
  // console.log(value.toFixed()); error
  // console.log(value.toUpperCase()); error

  // 타입 좁히기
  if (typeof value === "number") {
    // 타입 가드 (타입을 좁힐 수 있도록 도와주는 것)
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // value 값이 Date 객체인지?
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(value.name, value.age);
  }
  // else if (typeof value === "object") {
  //   console.log(value.getTime()); // error => null도 객체기떄문에 오류!
  // }
}
