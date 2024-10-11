// 제네릭 => 일반적인, 포괄적인

// [문제상황]
function func1(value: unknown) {
  return value;
}

// value:any 타입이면 num, str도 any타입
let num1 = func1(10);
// num1.toUpperCase(); // num이 any 타입이라면 error 발생 하지 않움
// num1.toFixed(); // num이 unknown 타입이라면 error 발생함

if (typeof num1 === "number") num1.toFixed(); // 타입 좁히기를 해야 가능

let str1 = func1("hello");

// [제네릭 함수]
// <T>: 타입 변수 => 타입을 담는 변수, 상황에 따라 다른 변수를 담을 수 있음 => 함수를 호출할때마다 결정됨
function func<T>(value: T): T {
  return value;
}

let num = func(10); // num => number 타입
let str = func("hello"); // str => string 타입

// arr을 튜플 타입처럼 사용하고 싶을 경우
let arr = func([1, 2, 3]); // arr: number[]
let arr1 = func([1, 2, 3] as [number, number, number]); // 1. 타입 단언
let arr2 = func<[number, number, number]>([1, 2, 3]); // 2. 제네릭 활용
