// 조건부 타입 기반의 유틸리티 타입

// Exclude<T, U>
// => 제외하다, 추방하다
/// => T에서 U를 제거

type Exclude<T, U> = T extends U ? never : T;
// 1.
// Exclude<string, boolean> |
// Exclude<boolean, boolean>

// 2.
// string |
// never

// 3.
// string

type A = Exclude<string | boolean, boolean>;

// Extract<T, U>
// => T에서 U를 추출하는 타입
type Extract<T, U> = T extends U ? T : never;
type B = Extract<string | boolean, boolean>;

// ReturnType<T>
// => 함수의 반환값 타입을 추출하는 타입

type ReturnType<T extends (...args: any) => any> = T extends (
  ...arg: any
) => infer R
  ? R
  : never;

function funcA() {
  return "hello";
}

function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;
