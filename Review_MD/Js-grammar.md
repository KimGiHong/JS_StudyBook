# 알고있다면 유용할 자바스크립트의 문법

## 목차

1. [삼항 연산자](#삼항-연산자)
1. [Truthy & Falsy](#truthy-and-falsy)
1. [단축 평가 (short-circuit evaluation) 논리 계산법](#단축-평가-논리-계산법)
1. [함수의 기본 파라미터](#함수의-기본-파라미터)
1. [조건문 조금 더 유용하게 사용하기](#조건문-조금-더-유용하게-사용하기)
1. [비구조화 할당(구조분해) 문법](#비구조화-할당-문법)
1. [spread 와 rest 문법](#spread-와-rest-문법)

## 삼항 연산자

* 삼항 연산자 사용법
`조건 ? true일때 : false일때`

아래 예제와 같이 삼항 연산자를 중첩하여 사용할 수 있다.
```javascript
const condition1 = false;
const condition2 = false;

const value = condition1 
  ? 'Hi' 
  : condition2 
    ? 'Javascript' 
    : '자바스크립트';

console.log(value);
```

가독성이 그렇게 좋지 않으니 이러한 코드는 피하시는 것이 좋을 것 같다. 이럴 땐 그냥 if문으로 처리하는게 코드를 읽기가 쉬울 것 같다.

[📜목차보기](#목차)

## Truthy and Falsy

* 그냥 알아두면 좋은 개념

Falsy 한 값들

```javascript
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
```

값들은 모두 true이다.

이 코드 이외의 값든은 모두 Truthy한 값들이라 생각하면 될 것 같다.

Truthy 한 값과 Falsy 한 값은 if 문에서도 사용 할 수있다.

```javascript
const value = { a: 1 };
if (value) {
  console.log('value 가 Truthy 하네요.');
}
```

value 가 Truthy 한 값이기 때문에, 콘솔에 메시지가 출력 될 것이다. 반면, value 가 null, undefined, 0, '', NaN 중 하나라면, 나타나지 않을 것이다.

알아두면 조건문을 작성할 때 편할 것 같다.

추가적으로, 특정 값이 Truthy 한 값이라면 true, 그렇지 않다면 false 로 값을 표현하는 것을 구현하겠다.

```javascript
const value = { a: 1 };

const truthy = value ? true : false;
```

위 코드와 같이 삼항연산자를 이용하면 쉽게 value 값의 존재 유무에 따라 쉽게 true 및 false 로 전환이 가능하다.

근데 이걸 더 쉽게 할 수 있다.

```javascript
const value = { a: 1 };
const truthy = !!value;
```

그냥 알아만 두도록 하자.

[📜목차보기](#목차)

## 단축 평가 논리 계산법

* 단축 평가 논리 계산법은 논리 연산자를 좀 더 유용하게 사용하는 방법이다.

논리 연산자를 사용 할 때에는 무조건 true 혹은 false 값을 사용해야 되는 것은 아니다. 
문자열이나 숫자, 객체를 사용 할 수도 있고, 해당 값이 Truthy 하냐 Falsy 하냐에 따라 결과가 달라진다.

```javascript
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  return animal.name;
}

const name = getName(dog);
console.log(name); // 멍멍이
```

위 예제에서 getName의 파라미터가 제대로된 객체가 주어지지 않으면 animal 객체가 undefined 이기 때문에, undefined 에서 name 값을 조회 할 수 없어서 에러가 발생하게 된다.

그렇다면, 만약 함수에서 animal 값이 제대로 주어졌을 때만 name 을 조회하고, 그렇지 않을때는 그냥 undefined 를 반환하게 하고 싶으면 어떻게 해야 할까?

```javascript
const dog = {
  name: '멍멍이'
};

function getName(animal) {
  if (animal) {
    return animal.name;
  }
  return undefined;
}

const name = getName();
console.log(name);
```

이렇게 하면 animal 값이 주어지지 않아도, 에러는 발생하지 않는다. 이러한 코드를 논리 연산자를 사용하면 코드를 단축시킬 수 있다.

[📜목차보기](#목차)

### && 연산자로 코드 단축시키기

특정 값이 유효할때에만 어떤 값을 조회하는 작업을 해야 할 때 매우 유용한 코드
```javascript
console.log(true && 'hello'); // hello
console.log(false && 'hello'); // false
console.log('hello' && 'bye'); // bye
console.log(null && 'hello'); // null
console.log(undefined && 'hello'); // undefined
console.log('' && 'hello'); // ''
console.log(0 && 'hello'); // 0
console.log(1 && 'hello'); // hello
console.log(1 && 1); // 1
```

*  A && B 연산자를 사용하게 될 때에는 A 가 Truthy 한 값이라면, B 가 결과값이 됩니다. 반면, A 가 Falsy 한 값이라면 결과는 A 가 된다.

[📜목차보기](#목차)

## || 연산자로 코드 단축시키기

|| 연산자는 만약 어떤 값이 Falsy 하다면 대체로 사용 할 값을 지정해줄 때 매우 유용하게 사용 가능하다.

```javascript
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  if (!name) {
    return '이름이 없는 동물입니다';
  }
  return name;
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```
위 코드를 || 연산자를 사용하여 더욱 간단하게 단축시킬 수 있다.

```javascript
const namelessDog = {
  name: ''
};

function getName(animal) {
  const name = animal && animal.name;
  return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name); // 이름이 없는 동물입니다.
```

A || B 는 만약 A 가 Truthy 할경우 결과는 A 가 된다. 반면, A 가 Falsy 하다면 결과는 B 가 된다.

[📜목차보기](#목차)

## 함수의 기본 파라미터 

함수의 기본 파라미터 설정 방법

예시로 원의 넓이를 구하는 함수를 만들어보겠다.

```javascript
function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

r의 값이 주어지지 않는 다면 NaN 값이 나오므로 기본 값을 1로 설정하였다.

그리고 이 코드를 함수의 기본 파라미터를 사용하여 바꾸면 다음과 같이 바꿀 수 있다.

```javascript
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

훨씬 깔끔해진다. 이 문법은 화살표 함수에서 또한 사용 가능 하다.

```javascript
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
```

[📜목차보기](#목차)

## 조건문 조금 더 유용하게 사용하기

### 특정 값이 여러 값중 하나인지 확인해야 할 때

만약, 특정 값이 여러 값 중 하나인지 확인을 해야 하는 상황이 생겼다고 가정해보자.

```javascript
function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

이렇게 시도하면 비교해야 할 값이 많아질 수록 코드는 길어진다.
이 상황을 해결 할 수 있는방법은, 배열을 만들고 배열의 includes 함수를 사용하는 것이다.

```javascript
function isAnimal(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

훨씬 깔끔한 코드로 변했다. 이또한 함수의 기본 파라미터에서 공부한 것과 같이 화살표 함수로도 작성 가능 하다.
```javascript
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
```

물론, 코드가 짧다고 해서 무조건 좋은것은 아니다. 단, 코드가 짧으면서도 읽었을 때 어떤 역할을 하는지 잘 이해가 될 수 있어야 비로소 좋은 코드라고 알고있다.

[📜목차보기](#목차)

## 값에 따라 다른 결과물을 반환해야 할 때

이번에는 주어진 값에 따라 다른 결과물을 반환해야 할 때 사용 할 수 있는 유용한 팁을 적어보았다.

예시로, 동물 이름을 받아오면, 동물의 소리를 반환하는 함수를 만들고 싶다고 가정해보겠다.
```javascript
function makeSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(makeSound('개')); // 멍멍!
console.log(makeSound('비둘기')); // 구구 구 구
```
>if 문의 코드 블록이 한줄짜리라면 { } 를 생략 가능하다.

이 예시를 switch/case 문으로도 구현 할 수 있다. 코드가 길어지니 생략하도록 하자.
참고로 switch/case 문에서 return 을 할 때에는 break 를 생략해도 된다.

특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지 있을 때는 `객체`를 활용하면 좋다고 한다.

```javascript
function makeSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(makeSound('개')); // 멍멍!
console.log(makeSound('비둘기')); // 구구 구 구
```
훨씬 간략하고 가독성이 좋은것 같다.

반면, 값에 따라 실행해야 하는 코드 구문이 다를 때는 어떻게 해야 할까

그럴 땐 객체에 함수를 넣으면 될 것 같다.

```javascript
function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

makeSound('개');
makeSound('비둘기');
```

알고있으면, 나중에 많이 사용할 듯 하다.

[📜목차보기](#목차)

## 비구조화 할당 문법

비구조화 할당 문법을 잘 활용하는 방법을 적어보겠다.

비구조화 할당 문법을 사용하면 객체 안에 있는 값을 추출해서 변수 혹은 상수로 바로 선언해 줄 수있었다.
```javascript
const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2
```

그리고, 함수의 기본 파라미터에서도 비구조화 할당을 할 수 있었다.

```javascript
const object = { a: 1, b: 2 };

function print({ a, b }) {
  console.log(a);
  console.log(b);
}

print(object);
```

[📜목차보기](#목차)

## 비구조화 할당시 기본값 설정

```javascript
const object = { a: 1 };

function print({ a, b = 2 }) {
  console.log(a);
  console.log(b);
}

print(object);
```

함수의 파라미터가 아니더라도 사용 가능하다.

[📜목차보기](#목차)

## 비구조화 할당시 이름 바꾸기

* 비구조화 할당을 하는 과정에서 선언 할 값의 이름을 바꾸는 방법

다음과 같은 코드가 있다고 가정하자

```javascript
const animal = {
  name: '멍멍이',
  type: '개'
};

const nickname = animal.name;

console.log(nickname); // 멍멍이
```

위 코드에서는 animal.name 값을 nickname 값에 담고 있다, 이름이 같다면 비구조화 할당을 이용하면 되는데 이 예문은 이름이 다르다. 이러한 상황에서는 `:` 문자를 사용해서 이름을 바꾸도록 하자.
```javascript
const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal
console.log(nickname);
```

`animal 객체 안에 있는 name 을 nickname 이라고 선언하겠다. 라는 의미이다.`

[📜목차보기](#목차)

## 배열 비구조화 할당 

비구조화 할당은 객체에서뿐만 아니라 배열에서도 가능하다.

```javascript
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
```
이 문법은 배열 안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용하면 매우 유용하다고 한다.

객체 비구조화 할당과 마찬가지로, 기본값 지정이 가능하다.

```javascript
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
```

[📜목차보기](#목차)

## 깊은 값 비구조화 할당

객체 안에 있는 값들을 꺼내는 방법을 적어보겠다.
```javascript
const deepObject = {
  state: {
    information: {
      name: 'Hong',
      languages: ['korean', 'english', 'japanese']
    }
  },
  value: 5
};
```

여기서 name, languages, value의 값들을 꺼내고 싶을 땐 2가지 방법이 있다

첫째, 비구조화 할당 문법을 두번 사용하면 된다.

```javascript
const deepObject = {
  state: {
    information: {
      name: 'Hong',
      languages: ['korean', 'english', 'japanese']
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted); // {name: "Hong", languages: Array[3], value: 5}
```

이 예제에서 extracted 객체를 선언할 때 이렇게 했는데

```javascript
const extracted = {
  name,
  languages,
  value
}

```

이 코드와 같다고 한다.
```javascript
const extracted = {
  name: name,
  languages: languages,
  value: value
}
```

key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜주는 문법이다. 이 문법은 ES6 의 object-shorthand 문법이라고 부른다. 굳이 이름까지 알 필요는 없을 것 같다.

둘째, 한번에 모두 추출해버린다.
```javascript
const deepObject = {
  state: {
    information: {
      name: 'Hong',
      languages: ['korean', 'english', 'japanese']
    }
  },
  value: 5
};

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);
```

이렇게 하면 안에 박혀있는 값들도 객체에서 추출 할 수 있다는것을 적어보았다.

추출하는 방법은 자신이 편한대로 쓰도록 하자.

[📜목차보기](#목차)

## spread 와 rest 문법
>ES6부터 도입된 문법이다.

### spread

spread는 영어이다. 한국말로 펼치다,퍼뜨리다 라는 의미가 있다.
뜻과 비슷하게 spread는 객체 또는 배열을 펼칠 수 있다

```javascript
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

여기서 사용한 `...`문자가 바로 spread 연산자이다.
원래는 중복하여 작성할 코드들을 spread 문법을 사용하여 더 간단하게 작성가능하다.

spread 연산자는 배열에서 또한 사용 가능하다.

```javascript
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);
```

기존의 animals 는 건드리지 않으면서, 새로운 anotherAnimals 배열에 animals 가 가지고 있는 내용을 모두 집어넣고, '비둘기' 라는 항목을 추가적으로 넣었다.

배열에서 spread 연산자를 여러번 사용 할 수도 있다.

```javascript
const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
```

[📜목차보기](#목차)

## rest

* rest는 spread랑 비슷한데 역할이 다르다.
rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능하다.

### 객체에서의 rest

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);
```

rest 안에 name 을 제외한 값들이 들어가 있다.

rest 는 객체와 배열에서 사용할 때 비구조화 할당과 함께 사용된다. 주로 사용할 때는 `rest` 키워드를 사용하긴 하는데 굳이  추출할 값의 이름을 `rest` 로 사용할 필요는 없다.

attribute 까지 없앤 새로운 객체를 만들고 싶다면 이렇게 해주면 될 것 같다.

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);
```

[📜목차보기](#목차)

### 배열에서의 rest

EX ) 
```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);
```
배열 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣었다.

근데 이렇게는 못한다고 한다.

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers;
```

[📜목차보기](#목차)

### 함수 파라미터에서의 rest

예를 들어서 파라미터로 넣어준 모든 값들을 합해주는 함수를 만들어주고 싶다고 가정해보자.

```javascript
function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```

이렇게 함수의 파라미터가 몇개가 될 지 모르는 말도안되는 상황에서 rest 파라미터를 사용하면 매우 유용하다.

```javascript
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```

파라미터들이 들어가있는 배열을 받았으니 이제 모두 더하면 되겠다.

```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21
```

[📜목차보기](#목차)

### 함수 인자와 spread

* 함수에서 값을 읽을때, 그 값들은 파라미터라고 부른다.
그리고 함수에서 값을 넣어줄 때, 그 값들은 인자라고 부른다.

함수파라미터와 rest 를 사용한 것과 비슷한데, 반대의 역할이다. 예를 들어, 우리가 배열 안에 있는 원소들을 모두 파라미터로 넣어주고 싶다고 가정을 해보겠다.

```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
  numbers[0],
  numbers[1],
  numbers[2],
  numbers[3],
  numbers[4],
  numbers[5]
);
console.log(result);
```

이 방법을 쓰는 사람은 굉장히 불쌍한 사람일 것이다.

sum함수를 사용 할 때 인자 부분에서 spread 를 사용하면 다음과 같이 표현이 가능하다.

```javascript
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result);
```

코드가 보기 좋게 줄어들었다 매우 편안하다.

이렇게, spread 와 rest 를 잘 사용하면 앞으로 보기 깔끔한 코드를 작성하는 것에 큰 도움을 줄 것이다.

[📜목차보기](#목차)

## Scope 란 무엇일까?

* Scope 란, 우리가 변수 혹은 함수를 선언하게 될 때 해당 변수 또는 함수가 유효한 범위를 의미한다.
  이 스코프에서 3가지가 있다.
```markdown
1. Global (전역) Scope: 코드의 모든 범위에서 사용이 가능합니다.
2. Function (함수) Scope: 함수 안에서만 사용이 가능합니다.
3. Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용이 가능합니다.
```
### 예시를 통해 Scope를 이해해보자

```javascript
const value = 'hello!';

function myFunction() {
  console.log('myFunction: ');
  console.log(value);
}

function otherFunction() {
  console.log('otherFunction: ');
  const value = 'bye!';
  console.log(value);
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);
```

코드의 맨 윗줄에서 선언된 `value` 값은 Global Scope 로 선언된 값이다. Global Scope 로 선언된 값은 어디서든지 사용이 가능하다.

`otherFunction` 에서는 함수 내부에서 `value` 값을 'bye!' 로 새로 선언을 해주었다. 이렇게 되면, `value` 라는 값은 Function Scope 로 지정이 되서 해당 값은 `otherFunction` 내부에서만 유효한 값이 된다. 이렇게 값을 설정한다고 해서 기존에 Global Scope 로 선언된 `value` 값이 바뀌지 않는다.  
<br>
  
또 다른 예시를 봐보도록 하자.

```javascript
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  const anotherValue = 'world';
  function functionInside() {
    console.log('functionInside: ');
    console.log(value);
    console.log(anotherValue);
  }
  functionInside();
}


myFunction()
console.log('global scope: ');
console.log(value);
console.log(anotherValue);
```

`myFunction` 내부에 `anotherValue` 라는 새로운 값을 선언했고, `functionInside` 라는 함수도 선언을 했다. `functionInside` 함수에서는 `myFunction` 에서 선언한 `value` 값과 `anotherValue` 값을 조회 할 수 있다.

반면, `myFunction` 밖에서는 `anotherValue` 를 조회 할 수 없다.
<br>

다른 예제다.

```javascript
const value = 'hello!';

function myFunction() {
  const value = 'bye!';
  if (true) {
    const value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);
```

`const` 로 선언한 값은 Block Scope 로 선언이 된다. 따라서, if 문 같은 블록 내에서 새로운 변수/상수를 선언하게 된다면, 해당 블록 내부에서만 사용이 가능하며, 블록 밖의 범위에서 똑같은 이름을 가진 값이 있다고 해도 영향을 주지 않는다.

let 또한 마찬가지이다.

하지만 var는 Function Scope 로 선언이 되므로, if 문 블록 내부에서 선언한 value 값이 블록 밖의 value 에도 영향을 미치게 된다.

```javascript
var value = 'hello!';

function myFunction() {
  var value = 'bye!';
  if (true) {
    var value = 'world';
    console.log('block scope: ');
    console.log(value);
  }
  console.log('function scope: ');
  console.log(value);
}

myFunction();
console.log('global scope: ');
console.log(value);
```

[📜목차보기](#목차)

## Hoisting은 뭘까? Hoisting 이해하기

* Hoisting 이란, 자바스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용 할 수 있는 자바스크립트의 작동 방식을 의미한다.

에제로 봐보도록 하자.

```javascript
myFunction();

function myFunction() {
  console.log('hello world!');
}
```

위 코드에서는 `myFunction` 함수를 선언하기 전에, `myFunction()` 을 호출해주었다. 함수가 아직 선언되지 않았음에도 불구하고 코드는 정상적으로 작동하게 된다.

이게 잘 작동하는 이유는, 자바스크립트 엔진이 위 코드를 해석하는 과정에서, 다음과 같이 받아들이게 되기 때문이다.

```javascript
function myFunction() {
  console.log('hello world!');
}

myFunction();
```

이러한 현상을, Hoisting 이라고 부르는 것 같다.
변수 또한 Hoisting 이 된다고 한다.

하지만, `const` 와 `let` 은 Hoisting이 발생하지 않고, 에러가 발생하게 된다.

Hoisting 은 자바스크립트 엔진이 갖고 있는 성질이며, Hoisting 을 일부러 할 필요는 없지만, 방지하는 것이 좋다고 한다. 왜냐하면 Hoisting 이 발생하는 코드는 이해하기 어렵기 때문에 유지보수도 힘들어지고 의도치 않는 결과물이 나타나기 쉽기 때문이다.

Hoisting 을 방지하기 위해서, 함수의 경우 꼭 선언 후에 호출을 하도록 주의를 하도록 하고, var 대신 const, let 을 위주로 사용하자. 추가적으로, 나중에 자바스크립트 개발을 본격적으로 하게 될 때에는 ESLint 라는것을 사용하여 Hoisting 이 발생하는 코드는 에디터상에서 쉽게 발견해낼 수 있을 것이다.

[📜목차보기](#목차)
