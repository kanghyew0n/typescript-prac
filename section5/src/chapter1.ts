// interface의 확장

interface Animal {
  name: string;
  age: number;
}

// 이것도 가능
// type Animal =  {
//   name: string;
//   age: number;
// }

// dog는 animal을 확장한다는 의미
// 상속이라고도 함
// 다시 정의하는 것도 가능
// 하지만 다시 정의하려는 것이 원본값의 서브 타입이어야 가능
interface Dog extends Animal {
  name: string; // 재정의: 'hello'라고 표시해도 괜찮음, string의 서브타입이라 가능
  isBark: boolean;
}

const dog: Dog = {
  name: "hello",
  age: 5,
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중확장 가능
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "hello",
  age: 5,
  isBark: true,
  isScratch: true,
};
