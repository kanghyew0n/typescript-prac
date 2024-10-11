// 프로미스

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject("error");
  }, 3000);
});

// res 타입을 제네릭으로 지정하기
promise.then((response) => {
  console.log(response * 10);
});

// 실패타입은 정해진게 없어서 타입 좁히기를 사용하기
promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});

// 프로미스를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

// 1. function fetchPost():Promise<Post> { // this!!
// 2. return new Promise<Post>
function fetchPost():Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "title1",
        content: "content1",
      });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
