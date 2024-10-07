// 함수 타입 정의

// 함수를 설명하는 좋은 방법
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지
function func(a: number, b: number) {
  return a + b;
}

// 화살표 함수를 정의하는 방법
const add = (a: number, b: number): number => a + b;

// 선택적 매개변수가 필수 매개변수보다 앞에있으면 오류 발생
function introduce(name = "강혜원", tall?: number) {
  console.log(`name: ${name}`);

  // tall은 없을 수 있으니 타입 좁히기 필요
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }
}

// 가변적인 길이의 인수를 묶어서 전달하는 것
function getSum(...rest: number[]) { // ...rest: [number, number, number] : 튜플 형식으로 길이 지정 가능
  let sum = 0;
  rest.forEach((it) => (sum += it));
  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
