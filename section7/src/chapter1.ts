// 제네릭 타입 변수

// 첫번째 사례
// T: 같은 타입으로 할당이 되어버림 error => T, U로 타입을 별도로 지정해줌
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, "2");

// 두번째 사례
// T : T의 타입을 unknown 타입으로 되어서 data[0]의 값을 모른다는 에러 발생
// T[] 으로 배열타입으로 알려줌 => multi: string | number | boolean으로 유니온 타입으로 나옴 => "a"인 string 타입으로 나오길 바람
// [T, ...unknown[]] : 데이터의 타입이 튜플, 첫번재 요소의 타입 T, rest 파라미터 사용하듯이 사용
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]); // 0
let str = returnFirstValue(["a", "b", "c"]); // a
let multi = returnFirstValue(["a", 1, true]);

// 세번째 사례
// <T extends { length: number }> : number type의 프로퍼티 length를 가지고 있는 객체를 확장하는 타입으로 T를 제한함
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3
let var2 = getLength("hello"); // 5
let var3 = getLength({ length: 10 }); // 10
// let var4 = getLength(10); // length가 없는 것은 error
