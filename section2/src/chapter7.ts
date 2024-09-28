// void
// void -> 공허 -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

function func3(): undefined {
  console.log("hello");
  // return;
  // return undefined;
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
a = undefined; // 가능

// never
// 존재하지 않는, 불가능한 타입
// 그 어떤 값도 저장할 수 없음

function func4(): never {
  while (true) {}
}

function func5(): never {
  throw new Error();
}

let b: never;
// b = 1;
// b = "hello";
// b = {};
// b = undefined; 