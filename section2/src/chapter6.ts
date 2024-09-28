// any
// 특정 변수의 타입을 모를때 사용

let anyVar: any = 10; // 초기화로넘버 타입으로 추론됨
anyVar = "강혜원";
anyVar = true;

anyVar.toFixed(); // 런타임에서 error
anyVar.toUpperCase(); // 런타임에서 error

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown = 10;
unknownVar = "강혜원";

// num = unknownVar; // 넘버타입의 변수에는 할당할 수 없음
// unknownVar.toFixed(); error
// unknownVar.toUpperCase(); error

if (typeof unknownVar === "number") {
  num = unknownVar;
}
