// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입

// 태그드 유니온 타입이라고도 함
// tag property: 스트링 리터럴 타입을 포함하기 떄문에 서로소 관계가 됨
type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest; // 서로소 유니온 타입

function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
      break;
    case "GUEST":
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
  }

  // 문제점: 직관적이지 않음, 각 프로퍼티를 확인해야함
  // if ("kickCount" in user) {
  //   // admin type
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if ("point" in user) {
  //   // member type
  //   console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`);
  // } else {
  //   // guest type
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  // }
}

// 복습겸 한가지 사례 더
// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// AsyncTask에 한번에 작업 할 경우
// 옵셔널 체이닝을 꼭 해야함, 타입 좁히기가 잘못됨 => 서로소 유니온 타입으로 만들어주기
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("loading");
      break;
    case "FAILED":
      console.log(task.error.message);
      break;
    case "SUCCESS":
      console.log(task.response.data);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 빌셍 원인은~~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "data~~",
  },
};
