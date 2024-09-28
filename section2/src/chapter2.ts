// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["hello", "world"];
let boolArr: Array<boolean> = [true, false]; // 제네릭

// 배열에 들어가는 요소의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"]; // 유니온 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2],
  [3, 4],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3]; error
// tup1 = ["1", "2"]; error

let tup2: [number, string, boolean] = [1, "2", true];

// 배열 메서드를 사용해서 추가하거나 제거하는 것을 주의해야함
// js 컴파일 되었을때는 배열로 인식하기 때문
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플의 사용이 용이한 경우
// 값이 정해져있고 순서가 중요할때
const users: [string, number][] = [
  ["강혜원", 1],
  ["강혜투", 2],
  ["강혜쓰리", 3],
];
