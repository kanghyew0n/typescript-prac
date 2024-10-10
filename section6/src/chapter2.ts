// 접근제어자
// access modifier => 필드나 메소드에 접근할 수 있는 범위를 설정
// public, private, protected

class Employee {
  // public name: string;
  // private age: number;
  // protected position: string;

  // 생성자
  // 생성자에 접근 제어자를 달면
  // 필드를 자동 생성하게 됨 => 필드 정의는 생략해야함
  // 값도 자동으로 할당함 => this.name = name; 부분 없어도 됨
  constructor(
    public name: string,
    private age: number,
    protected position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // constructor(name: string, age: number, position: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.position = position;
  // }

  //메서드
  work() {
    console.log("work!");
    console.log(`age: ${this.age}`);
  }
}

// 상속받는 클래스 => private 는 파생클래스에서도 접근 불가
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

  func() {
    // console.log(`age: ${this.age}`); // error : age private
    console.log(`position: ${this.position}`); // protected: 파생 클래스에서 접근 가능
  }
}

const employee = new Employee("강혜원", 25, "developer");
console.log(employee);
// employee.work();
// employee.name = "rkdrrkak"; // public: 기본값, 자유롭게 인스턴스의 프로퍼티에 접근 가능
// employee.age = 26; // error: private => 클래스 외부에서는 접근제한, 메서드에서 사용 가능
// employee.position = "engineer"; // error: protected => 클래스 외부에서는 접근제한, 메서드 및 파생 클래스에서 사용 가능
