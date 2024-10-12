// infer => 조건부 타입 내에서 특정 타입만 딱 추론해올 수 있는 기능
// inference의 약자 => 추론하다의 의미

type FuncA = () => string;
type FuncB = () => number;

// type ReturnType<T> = T extends () => string ? string : never;
// => T extends () => string 부분을 () => string으로 고정했기때문에 반환값 자체를 가져오지 못하고있음 그럴때 infer사용
type ReturnType<T> = T extends () => infer R ? R : never;


type A = ReturnType<FuncA>;
// ReturnType<FuncA> => ReturnType<T> => T = FuncA => string 

type B = ReturnType<FuncB>;
// ReturnType<FuncB> => ReturnType<T> => T = FuncB => number 

type C = ReturnType<number>; // never
// => type R을 추론할 수 없음

// 예제
// 프로미스의 결과값 타입만 떼어서 가져오도록!
  type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스타입이어야함
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.

  type PromiseA = PromiseUnpack<Promise<number>>; // number

  type PromiseB = PromiseUnpack<Promise<string>>; // string