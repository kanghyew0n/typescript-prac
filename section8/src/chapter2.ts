// keyof 연산자
// interface Person {
//   name: string;
//   age: number;
// }

// 타입을 뽑아낼 수 있음
type Person = typeof person;

// (person: Person, key: "name" | "age") => key 프로퍼티를 유니온 타입으로 명시하는것은 좋지 않음
// keyof + TYPE 조합으로만 사용해야함
// (person: Person, key: keyof Person)
// (person: Person, key: keyof typeof person) => 이것도 가능
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: "강혜원",
  age: 26,
};

getPropertyKey(person, "name");
