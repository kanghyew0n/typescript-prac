// 맵드 타입 => interface에서는 안되고 타입에서만 사용할 수 있음
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in "id" | "name" | "age"]: boolean;
};

type BooleanUser2 = {
  [key in keyof User]: boolean;
};

type ReadOnlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  //... 기능
  return {
    id: 1,
    name: "강혜원",
    age: 24,
  };
}

function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // PartialUser 타입을 사용했을 경우
  // id: 2,
  // name: "강혜원",
  age: 24, // 이것만 수정하려고 할때 모든 값을 보내야할까?
});
