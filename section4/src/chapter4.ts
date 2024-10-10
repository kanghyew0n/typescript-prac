// 사용자 정의 타입가드

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 함수의 반환값으로는 어려움, 사용자 정의 타입가드 해줌
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined; // 타입 단언 사용해주기
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined; // 타입 단언 사용해주기
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal;
  }
  // if("isBark" in animal) {
  //   console.log(animal.isBark);
  // } else {
  //   console.log(animal.isScratch);
  // }
}
