// unknown type => 전체집합
// 업캐스팅 가능!
function unknownExam() {
  let a: unknown = 1; // 업캐스팅!
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;

  let unknownVar: unknown;

  // let num: number = unknownVar; // error 다운캐스팅!
  // let str: string = unknownVar; // error 다운캐스팅!
  // let bool: boolean = unknownVar; // error 다운캐스팅!
}

// never type => 공집합 => 반환값이 존재하지 못함
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10; // error 다운캐스팅!
  // let never2: never = "string"; // error 다운캐스팅!
  // let never3: never = true; // error 다운캐스팅!
}

// void type => undefined의 슈퍼타입
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  let voidVar: void = undefined;
}

// any type => 치트키 타입 => 모든 타입의 슈퍼타입, 서브타입 가능 (never 제외)
// 타입 계층도를 무시함 => 위험한 타입
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // * any 타입은 다운캐스팅 가능
  undefinedVar = anyVar; // * any 타입은 다운캐스팅 가능
  // neverVar = anyVar; // * never는 완벽한 공집합아기 때문에 any도 치트키 못씀
}
