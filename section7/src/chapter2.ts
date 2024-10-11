// map, forEach 메서트 타입 정의하기

// map 메서드
// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); // [2,4,6]

// map 함수 만들어보기
// map<T>(arr: T[], callback: (item: T) => T) => 반환값이 T가 아니라면?
// map<T, U>(arr: T[], callback: (item: T) => U) => 반환값을 U인 별도의 타입으로 지정
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(["a", "b"], (it) => it.toUpperCase());
map(["a", "b"], (it) => parseInt(it)); // T:string인데 parseInt(it)) => number type임

// forEach
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, (it) => console.log(it.toFixed()));
forEach(arr2, (it) => console.log(`${it}`));
forEach(["123", "456"], (it) => console.log(it));
