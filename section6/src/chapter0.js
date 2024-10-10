// 자바스크립트의 클래스
// 클래스 - 객체를 쉽게 생성할 수 있도록 도와주는 문법

let studentA = {
  name: 'rkdrrkak',
  grade: 'A+',
  age: 26,
  student() {
    console.log('study hard')
  },
  introduce() {
    console.log('hello!')
  }
}

class Student {
  // 필드 선언
  name;
  age;
  grade;

  // 생성자 선언, this는 해당 객체를 상징함
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // 메서드 설정
  study() {
    console.log('study hard');
  }
  introduce() {
    console.log('hello!');
    console.log(`name: ${this.name}`);
  }
}

const studentB = new Student('rkdrrkak', 26, 'A+');
console.log(studentB) // 실행결과: Student { name: 'rkdrrkak', age: 26, grade: 'A+' }

studentB.study(); // 열심히 공부 함
studentB.introduce(); // 안녕하세요!



// 상속

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 슈퍼클래스의 생성자 호출
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}