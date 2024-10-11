// 템플릿 리터럴 타입

type Color= 'red' | 'green' | 'blue';
type Animal = 'dog' | 'cat';
// type ColorAnimal = 'red-dog' | 'green-dog' | 'blue-dog' | 'red-cat' | 'green-cat' | 'blue-cat';   
type ColorAnimal = `${Color}-${Animal}`;

const colorAnimal:ColorAnimal = 'blue-dog' // 간단하게 만들 수 있음