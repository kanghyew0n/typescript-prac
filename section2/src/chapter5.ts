// Enum type
// 여러가지 값들이 각각 이름을 부여해 열거해두고 사용하는 타입
// 컴파일 결과 타입 관련 코드는 제거된다고 했는데 enum은 값처럼 사용되는데?

// js 컴파일 결과 객체로 변환됨
// var Role;
// (function (Role) {
//     Role[Role["ADMIN"] = 0] = "ADMIN";
//     Role[Role["USER"] = 1] = "USER";
//     Role[Role["GUEST"] = 2] = "GUEST";
// })(Role || (Role = {}));

// 숫자형 Enum
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

// 문자형 Enum
enum Language {
  Korean = "ko",
  English = "en",
}

// enum Role {
//   ADMIN , // => 0
//   USER, // => 1
//   GUEST, // => 2
// }

// enum Role {
//   ADMIN  = 10 , // => 10
//   USER, // => 11
//   GUEST, // => 12
// }

const user1 = {
  name: "강혜원",
  role: Role.ADMIN, // 0 => 관리자
  Language: Language.English,
};
const user2 = {
  name: "강혜투",
  role: Role.USER, // 1 => 일반 사용자
  language: Language.Korean,
};
const user3 = {
  name: "강혜쓰리",
  role: Role.GUEST, // 2 => 게스트
};

console.log(user1, user2, user3);
