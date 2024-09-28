// number
// :number => type annotation

let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// num1.toUpperCase() error
// num1.toFixed(); // ok

// string
let str1: string = "hello";
let str2: string = "hello";
let str3: string = `hello`;
let str4: string = `hello ${num1}`;

// str1 = 123;  error
// str1.toFixed(); error
// str1.toUpperCase(); // ok

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let nul1: null = null;

// undefined
let und1: undefined = undefined;

// let numA: number = null; // strictNullChecks: false

// 리터럴 타입 : 값 자체가 타입이 됨
// 리터럴 -> 값
// 타입안에 포함되는 값 중에 하나를 마치 타입인 것 처럼 정의해서 사용
let numA: 10 = 10;
// numA = 12; error
