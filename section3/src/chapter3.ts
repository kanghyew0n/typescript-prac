// 기본타입간의 호환성 => 캐스팅!
let num1: number = 10;
let num2: 10 = 10;
num1 = num2;

// 객체타입간의 호환성 => 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
// 타입스크립트는 프로퍼티를 기준으로 타입을 정의하는 구조적 타입 시스템을 따름
// 도그타입은 애니멀 타입의 값으로 포함될 수 있음, 애니멀이 슈퍼타입이 될 수 있음
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog; // 업캐스팅
// dog = animal; // error 다운캐스팅

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한입크기로 작라먹는 타입스트립트",
  price: 30000,
  skill: "typeScript",
};

book = programmingBook; // 업캐스팅
// programmingBook = book; // 다운캐스팅

// * 초과 프로퍼티 검사
// * 객체타입의 변수를 초기화 할때는 객체 리터럴을 사용하면 초과 프로퍼티 검사가 이루어짐
// book2는 객체 리터럴을 사용해서 초과 프로퍼티 검사로 오류 발생 / book3는 변수를 넣어주고 있어 검사에 걸리지 않음
let book2: Book = {
  name: "한입크기로 작라먹는 타입스트립트",
  price: 30000,
  // skill: "typeScript", // error
};

let book3: Book = programmingBook;

// 인수도 마찬가지
function func(book: Book) {}
func({
  name: "한입크기로 작라먹는 타입스트립트",
  price: 30000,
  // skill: "typeScript", // error
});
func(programmingBook);
