// interface

interface Person {
  name: string;
  age?: number;
  sayHi(): void; // 오버로딩 하고싶다면 호출 시그니쳐로 사용하기
  sayHi(a: number, b: number): void; // 오버로딩 하고싶다면 호출 시그니쳐로 사용하기
  // sayHi: (a:number, b:number) => void; // error
  // sayHi(): void; // 호출시그니쳐
}

// interface IPerson {} // => 이렇게 사용하기도 함 

// error : intersection, union 타입 생성 못함
// interface Person2 {
//   name: string;
// } & number;

// 활용하기 1. 타입 별칭으로
type Person3 = Person | number;
// 활용하기 2. 타입 주석으로 활용하기
const person: Person | string = {
  name: "rkdrrkak",
  sayHi: function () {},
};

const person2: Person = {
  name: "rkdrrkak",
  age: 26,
  sayHi: function () {
    console.log("hi");
  },
};

person2.sayHi();
person2.sayHi(1, 2);
