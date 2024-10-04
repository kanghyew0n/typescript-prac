// 타입 단언
type Person = {
  name: string;
  age: number;
};

// 빈객체를 두고 나중에 값을 지정할때
let person: Person = {} as Person; // 타입 단언
person.name = "강혜원";
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

// 초과 프로퍼티 검사 발동 (breed) - error
// let dog: Dog = {
//   name: "까마",
//   color: "black",
//   breed: "진도",
// };

// as Dog로 타입 단언
let dog = {
  name: "까마",
  color: "black",
  breed: "진도",
} as Dog;

// 타입 단언 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함
let num1 = 10 as never;
let num2 = 10 as unknown;
// let num3 = 10 as string; 교집합 없음 => error
let num3 = 10 as unknown as string; // 다중 단언 => 좋지않음

// const 단언
// const 로 선언했을때 처럼
let num4 = 10 as const;

// 객체 타입에서 활용도 있음
// read only 프로퍼티가 됨
let cat = {
  name: "rkdrrkak",
  color: "black",
} as const;

// non null 단언 => 위험하니 조심하기
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "post1",
  author: "kanghyewon",
};

const len: number = post.author!.length; // post.author는 null이나 undefined가 아닐것이라고 알려줌
