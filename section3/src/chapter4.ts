// 대수타입 => 여러개의 타입을 합성해서 새롭게 만들어낸 타입
// 합집합과 교집합이 존재

// 1. 합집합 - Union 타입
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  language: "",
  color: "",
};

// Dog type, Person type 둘중 하나도 포함되지 않음
// let union4:Union1 = {
//   name: "",
// }

// 2. 교집합 - Intersection 타입
// 원본타입보다는 객체 타입에서 많이 사용함
let variable: number & string; // => never 타입, 공집합임

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection1 = Dog & Person;
let Intersection1: Intersection1 = {
  name: "",
  color: "",
  language: "",
};
