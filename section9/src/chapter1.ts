// 분산적인 조건부 타입 => 유니온과 함께 사용

// (복습) + [T] extends [number] => 분산방지 => ???
type StringNumberSwitch<T> = [T] extends [number] ? string : number;

let varA: StringNumberSwitch<number>; // varA => string
let varB: StringNumberSwitch<string>; // varB => number

let c: StringNumberSwitch<number | string>; //  분산적인 조건부 타입
// 분리된 타입을 유니온으로 묶어준다
// let c: StringNumberSwitch<number>;  => string 타입
// let c: StringNumberSwitch<string>;  => number 타입

let d:StringNumberSwitch<boolean | number | string>; // 분산 방지했을 경우 number 타입임
// 1. 
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2.
// number |
// string |
// number

// 3.
// number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;
// T=number, U=string 일때
// T extends U => false => T = number
// T=number, U=number 일때
// T extends U => true => T = never

// U에 해당하는 타입만 제거
type A = Exclude<number | string | boolean, string>;
// 1.
// Exclude<number, string>; | 
// Exclude<string, string>; | 
// Exclude<boolean, string>;

// 2.
// number | 
// never | 
// boolean

// 3.
// number | never | boolean 인데
// => never타입은 유니온 타입으로 묶였을 경우 never타입은 제거됨 (공집합 + 합집합 => 그냥 합집합이기때문)
// 따라서 number | boolean 유니온 타입

// => string과 string이 만났을때 string 타입을 제거할 수 있음

type Extract<T, U> = T extends U ? T : never;

// U에 해당하는 타입만 뽑아내기
type B = Extract<number | string | boolean, string>; 
// 1.
// Extract<number, string>; | 
// Extract<string, string>; | 
// Extract<boolean, string>;

// 2.
// never | 
// string | 
// never

// 3.
// never | string | never 인데
// => never타입은 유니온 타입으로 묶였을 경우 never타입은 제거됨 (공집합 + 합집합 => 그냥 합집합이기때문)
// 따라서 string 타입






















