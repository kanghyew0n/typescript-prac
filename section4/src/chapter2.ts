// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
// 1. 반환값의 타입이 호한되는가
// 2. 매개변수의 타입이 호환되는가 => 두가지 모두 호환되어야함

// 기준 1. 반환값이 호환되는가 => 다운캐스팅이 안되도록 함 (업캐스팅만 가능)
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // ok 업캐스팅
// b = a; // error 다운캐스팅

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수 개수 같을때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // error => c: number, d:10 업캐스팅이라 불가능
d = c; // 다운캐스팅이라 가능

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // error
// 위의 상황을 만들어보면...
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); // error
};

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// 2-2. 매개변수 개수 다를때
type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // error
