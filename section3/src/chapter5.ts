// 타입 추론
// 점진적인 타입 시스템 => 초기값을 기준으로 타입 추론

// function func(param) {} // error 매개변수는 타입 추론이 불가능하기 때문에 타입 필수

// let으로 타입을 추론할 경우 타입 넓히기 / const는 초기화 한 값으로 리터럴 타입으로 추론되기 때문
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "강혜원",
  profile: {
    nickname: "rkdrrkak",
  },
};

let { id, name, profile } = c; // 구조분해 할당시에도 추론 가능
let [one, two, three] = [1, 2, 3];

// 함수의 반환값 타입 추론
function func() {
  return "hello";
}

// 기본값이 있는 매개변수 타입 추론
function func1(message = "hello") {
  return "hello";
}


// any타입의 진화
// 초기화 하지 않을 경우: 암묵적인 any 타입
let d;
d = 10;
d.toFixed(); // type number

d = 'hello'
d.toUpperCase(); // type string
// d.toFixed(); // error

// const -> 리터럴 타입 10으로 추론됨
const num = 10;

let arr = [1, 'string']; // 유니온 타입으로 추론