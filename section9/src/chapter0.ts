// 조건부 타입

type A = number extends string ? string : number; // type A = number

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string; // type B = number

// 제네릭과 함께 사용
// 제네릭과 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // varA => string
let varB: StringNumberSwitch<string>; // varB => number

// 오버로드 시그니처
function removeSpaces<T>(text: T): T extends string ? string : undefined; 
function removeSpaces(text: any) {
  if (typeof text !== "string") return undefined as any;
  return text.replaceAll(" ", "") as any;
}

let result = removeSpaces("hello world");
result.toUpperCase();
