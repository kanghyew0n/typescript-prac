// Pick<T, K>
// =>  뽑다, 고르다
// => 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends 'title' | 'tags' | 'content' | 'thumbnail'
  // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnail'
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 콘텐츠",
};

// Omit<T, K>
// => 생략하다, 빼다
// => 객체 타입으로 부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'tags' | 'content' | 'thumbnail', 'title'>>
// Pick<Post, <'tags' | 'content' | 'thumbnail'>

const onTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

// Record<K, T>
// => 자주 사용됨
// => 객체 타입을 만들어주는 유틸리티

type PostWithThumbnail = Record<
  "title" | "tags" | "content" | "thumbnail",
  string
>;

// type ThumbnailLegacy = {
//   large: {
//     url: string;
//   };
//   medium: {
//     url: string;
//   };
//   small: {
//     url: string;
//   };
// };

type Record<K extends keyof any, V> = {
  [key in K]: V;
}

type Thumbnail = Record<
  "large" | "medium" | "small",
  { url: string; size: number }
>;
