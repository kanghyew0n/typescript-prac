// 인터페이스와 클래스

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move: () => void;
}

// 인터페이스가 정의하는 타입의 객체를 캐릭터 클래스가 생성할 수 있도록 정의 => implement
// implement: 구현하다의 뜻을 가짐, 설계도 느낌
// interface로 정의한 클래스 필드는 무조건 public! => private, protected 사용하면 error
// 흔하게 사용하지는 않음!
class Character implements CharacterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    // private extra: string => private 필요하면 따로 정의하기
  ) {}
  move() {
    console.log(`move! ${this.name} : ${this.moveSpeed}km`);
  }
}
