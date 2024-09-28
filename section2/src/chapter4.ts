// 타입 별칭 / type alias
// 컴파일시 제거됨
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

// type User = {} 공통 사용 불가

let user1: User = {
  id: 1,
  name: "강혜원",
  nickname: "강까마",
  birth: "19990820",
  location: "seoul",
};

let user2: User = {
  id: 2,
  name: "강혜투",
  nickname: "강까모",
  birth: "19990821",
  location: "seoul",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedStates: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: Number;
  Korea: number; // 필수적으로 포함되어야하는 프로퍼티
};

// type CountryNumberCodes = {
//   [key: string]: Number;
//   Korea: string; // 인덱스 시그니처 밸류값과 동일해야함
// };
// error

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedStates: 840,
  UnitedKingdom: 826,
};

// 주의) 프로퍼티가 없어도 오류안나는 점
let countryNumberAndStringCodes2: CountryNumberCodes = {
  Korea: 410,
  // Korea: 'ko', error
};
