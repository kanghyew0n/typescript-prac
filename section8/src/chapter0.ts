// 타입 조작하기 - 인덱스드 엑세스 타입

// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // 갑자기 추가해야한다면?
  };
}

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // 갑자기 추가해야한다면?
  };
}[];

// const key = 'author'

// 기존: (author: { id: number; name: string, age: number })
// 변경: (author: Post["author"])
// "author" <= 인덱스라고 함, 값이 아니라 타입임
// author: Post[key] // error
function printAuthorInfo(author: Post["author"]) {
  console.log(`author name: ${author.name}`);
  console.log(`author id: ${author.id}`);
}

function printIdInfo(authorId: Post["author"]["id"]) {
  console.log(authorId);
}

const post: Post = {
  title: "게시글 제목",
  content: "게시글",
  author: {
    id: 1,
    name: "강혜원",
    age: 30,
  },
};

// 배열타입으로부터 하나의 요소만 가져온다는 의미
// const post2: PostList[0] = {
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글",
  author: {
    id: 1,
    name: "강혜원",
    age: 30,
  },
};

function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`author name: ${author.name}`);
  console.log(`author id: ${author.id}`);
}

type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3]; // error
type TupNum = Tup[number]; // string | number | boolean 유니온 타입으로 추출된다
