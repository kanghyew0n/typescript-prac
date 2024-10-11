// 타입스크립트의 클래스

const employee = {
  name: "강혜원",
  age: 25,
  position: "developer",
  work() {
    console.log("work!");
  },
};


// name; 함수 만들때 매개변수에 타입이 정의되어있지 읺을때 발생하는 에러와 동일함
// => 추론할 수 있는 정보가 없을때 에러발생!
// error: name: string; 했을때
// 해결1) name?: string;
// 해결2) name: string = '';
// 해결3) 생성자 만들기!
class Employee {
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  //메서드
  work() {
    console.log("work!");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("rkdrrkak", 26, "개발자");
employeeB.work();

// 타입스크립트의 클래스는 타입으로도 활용할 수 있음
// 이유는 타입스크립트는 구조적으로 타입을 결정하기때문에 클래스의 구조를 보고 타입 결정이 가능
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
