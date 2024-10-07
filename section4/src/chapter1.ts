// 함수 타입 표현식
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: (a: number, b: number) => number = (a, b) => a / b;

// 호출 시그니쳐 (콜 시그니쳐)
type Operation2 = {
  (a: number, b: number): number;
  name: string; // 하이브리드 타입, 함수로도 가능 객체로도 가능
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: (a: number, b: number) => number = (a, b) => a / b;

add(1, 2);
add.name;
