// 객체 object => 객체 리터럴 타입으로 지정 필요
// 구조를 기반으로 타입을 지정 => 구조적 타입 시스템 => property based type system
// user의 id => 선택적인 프로퍼티, optional property
let user: { id?: number; name: string } = {
  id: 1,
  name: "강혜원",
};

user = {
  name: "강혜원",
};

// 읽기전용
let config: {
  readonly apiKey: string;
} = {
  apiKey: "123",
};
