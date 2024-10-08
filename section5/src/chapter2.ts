// 선언 합침

// type Person = {
//   name: string;
// };

// type Person = {
//   age: number;
// };

interface Person {
  name: string;
}

interface Person {
  // name:number; // error : 중복 프로퍼티를 정의할때 타입을 다르개 정의하면 '충돌'이라고 함
  // name: "hello"; // error
  name: string; // 이건 가능
  age: number;
}

const person: Person = {
  name: "",
  age: 0,
};

// 모듈 보강
interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: number;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: 3,
};
