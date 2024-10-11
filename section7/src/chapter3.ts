// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스는 변수에 타입을 직접 할당해야함
// 타입변수 = 타입파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["hello", "world"],
};

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 123,
};

// 하나의 타입으로 여러가지 활용 가능
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

// 제네릭 타입 별칭
type Map2<V> = {
  [key: string]: V;
};

let strMap2: Map2<string> = {
  key: "value",
};

// 제네릭 인터페이스의 활용 예시
// 유저 관리 프로그램
// 유저 구분: 학생 유저 / 개발자 유저

// Student , Developer => 서로소 유니온임

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 제네릭 인터페이스를 사용하면 타입 좁히기로 예외처리 필요없음
  // if (user.profile.type !== "student") {
  //   console.log("잘못오셨네용");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`[${user.name}] ${school}`);
}

// goToSchool(developerUser); //error

const developerUser: User<Developer> = {
  name: "강개발",
  profile: {
    type: "developer",
    skill: "typeScript",
  },
};

const studentUser: User<Student> = {
  name: "강학생",
  profile: {
    type: "student",
    school: "snu",
  },
};
