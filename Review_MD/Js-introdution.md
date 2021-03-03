# 자바스크립트 입문

## 목차
1.[변수(Variables)](#변수)  
2.[연산자(Operator)](#연산자)  
3.[조건문(Conditional)](#조건문)  
4.[함수(Functions)](#함수)  
4-5.[Clean-Code-Javascript](#clean-code-javascript)  
5.[객체(Object)](#객체)  
6.[배열(Arrangement)](#배열)  
7.[반복문(Loop)](#반복문)  
8.[배열 내장함수(Array built-in function)](#배열-내장함수)  
9.[프로토타입 & 클래스](#프로토타입과-클래스)

## 변수
* 변수는, 바뀔수 있는 값을 말합니다.
    * 한번 값을 선언하고 나서 바뀔 수 있습니다.
```javascript
let value = 1;
console.log(value);
value = 2;
console.log(value);
```
변수를 선언 할 때에는 이렇게 let 이라는 키워드를 사용합니다. 사용 하실 때 주의 할 점은 한번 선언했으면 똑같은 이름으로 선언하지 못합니다.

```javascript
let value = 1;
let value = 2;
```
이 코드처럼 let 을 사용하여 변수를 선언 할 때에는 오류가 발생합니다.

단, 다른 블록 범위 내에서는 똑같은 이름으로 사용이 가능하긴 하다.

[📜목차보기](#목차)

## 상수

* 상수는, 한번 선언하고 값이 바뀌지 않는 값을 의미합니다. 즉, 값이 고정적입니다.

상수 선언 방법
```javascript
const a = 1;
```
이렇게, 상수를 선언 할 때에는 ```const``` 키워드를 사용합니다.

상수를 선언하고 나면, 값을 바꿀 수 없습니다.

[📜목차보기](#목차)

## var

변수를 선언하는 방법으로  ```var``` 라는 키워드가 있습니다. 하지만 이제 이 키워드는 모던 자바스크립트에서 더 이상 사용하지 않습니다.

var 이 let 과 다른 주요 차이점으로는, 똑같은 이름으로 여러번 선언 할 수도 있습니다.

[📜목차보기](#목차)
<br>

## 데이터 타입

* 우리가 변수나 상수를 선언하게 될 때, 숫자 외에도 다른 값들을 선언 할 수 있습니다.

##### 숫자(Number)

```javascript
let value = 1;
```

##### 문자열(String)

```javascript
let text = 'hello';
let name = '자바스크립트';
```

##### 참/거짓(Boolean)

```javascript
let good = true;
let loading = false;
```
참은 true, 거짓은 false 입니다.

##### null & undefined

null은 주로, '이 값이 없다'선언할 때 사용합니다.
반면 undefined 는, 아직 값이 설정되지 않은 것을 의미합니다.

[📜목차보기](#목차)
<br>

## 연산자
* 연산자는 프로그래밍 언어에서 특정 연산을 하도록 하는 문자이다.

### 산술 연산자

산술 연산자는 사칙연산과 같은 작업을 하는 연산자를 의미한다.

* ```+``` : 덧셈
* ```-``` : 뺄셈
* ```*``` : 곱셈
* ```/``` : 나눗셈

위 4가지가 가장 기본적인 산술 연산자이다. 사용법은 간단하다.
```javascript
let a = 1 + 2;
console.log(a);
```
이와 같이 a값을 선언 할 때 1 + 2 의 결과물인 3을 담아 출력한다.

```javascript
let a = 1;
a++;
++a;
console.log(a);
```
위 코드 또한 산술 연산자의 일부이다.
`++`는 특정 변수에 1을 더해준다. 그런데, `++` 가 변수 이름 앞에 오는 것과 뒤에 오는것에 차이가 있다.

```javascript
let a = 1;
console.log(a++);
console.log(++a);
```
console.log(a++); 를 할 때에는 1을 더하기 직전 값을 보여주고 console.log(++a); 를 할 때에는 1을 더한 다음의 값을 보여준다는 차이가 있습니다.

[📜목차보기](#목차)

### 대입 연산자
* 대입 연산자는 특정 값에 연산을 한 값을 바로 설정 할 때 사용 할 수 있는 연산자이다.

```javascript
let a = 1;
a += 3;
a -= 3;
a *= 3;
a /= 3;
console.log(a);
```
[📜목차보기](#목차)

### 논리 연산자
* 논리 연산자는, 불리언 타입 (true 혹은 false)를 위한 연산자이다.

* ```!``` : NOT
* ```&&``` : AND
* ```||``` : OR

##### NOT
* NOT 연산자는 true 는 false 로, false 는 true 로 바꿔줍니다.
```javascript
const a = !true;
console.log(a);
```

##### AND

* AND 연산자는 양쪽의 값이 둘 다 true 일때만 결과물이 true 입니다.

```javascript
const a = true && true;
console.log(a);
```

##### OR

* OR 연산자는 양쪽의 값 중 하나라도 true 라면 결과물이 true 입니다. 
    * 그리고, 두 값이 둘 다 false 일 때에만 false 입니다.

```javascript
let t = true || false;
t = false || true;
t = true || true;
```

##### 연산 순서

사칙연산을 할 때 곱셈 나눗셈이 먼저고 그 다음이 덧셈 뺄셈인 것 처럼, 논리 연산자도 순서가 있습니다. 순서는 ```NOT -> AND -> OR```이다.

[📜목차보기](#목차)

### 비교 연산자

* 비교 연산자는 두 값을 비교 할 때 사용 할 수 있다.
<br>

### 두 값이 일치 하는가
```javascript
const a = 1;
const b = 1;
const equals = a === b;
console.log(equals);
```
`===` 는 두 값이 일치하는지 확인해줍니다. 일치한다면, true, 일치하지 않는다면 false 가 나타납니다.
두 값이 일치하는지 비교 할 때에는 `==` 대신 `===` 를 사용 할 것을 권장 드립니다. `==` 를 사용하다보면 실수를 할 확률이 높아집니다.
<br>

### 두 값이 일치 하지 않는가

두 값이 일치하지 않는지 확인 할 때에는 `!==` 를 사용하면 된다.
```javascript
const value = 'a' !== 'b';
```

### 크고 작음

두 값 중에서 무엇이 더 크고 작은지 비교하기 위해서는 다음 연산자를 사용 할 수 있다.

```javascript
const a = 10;
const b = 15;
const c = 15;

console.log(a < b); // true
console.log(b > a); // true
console.log(b >= c); // true
console.log(a <= c); // true
console.log(b < c); // false;
```

### 문자열 붙이기
두 문자열을 붙일 때에는 `+` 로 할 수 있습니다.

```javascript
const a = '안녕';
const b = '하세요';
console.log(a + b); // 안녕하세요
```

[📜목차보기](#목차)

## 조건문
* 조건문을 사용하면 특정 조건이 만족됐을 때 특정 코드를 실행할 수 있다.

[📜목차보기](#목차)

### if 문
* 가장 기본적인 조건문은 if 문이다.
    * if문은, "~~하다면 ~ 해라" 를 의미한다.

```javascript
const a = 1;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}
```
"a + 1 이 2 입니다."라는 문구가 출력되는 코드이다.
하지만 여기서 a 를 0으로 바꾼다면

```javascript
const a = 0;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}
```

결과는, 아무것도 출력되지 않는다.

if문을 사용하면, 이렇게 특정 조건이 만족 될 때에만 특정 코드를 실행 시킬 수 있다.

```javascript
if (조건) {
  코드;
}
```
조건이 만족됐을 때 실행시킬 코드가 { } 로 감싸져있는데요, 이를 코드 블록이라고 한다.

만약에 조건이 true 가 된다면 우리가 지정한 코드가 실행되는 것이고, false 가 된다면 코드가 실행되지 않습니다.

let 과 const 를 공부할 때, 다른 블록 범위에서는 똑같은 이름으로 선언 할 수도 있다고 공부하였다.

```javascript
const a = 1;
if (true) {
  const a = 2;
  console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);
```
위 코드에서는 if문에 조건을 true 로 설정했기 때문에 코드 블록 내부의 코드가 무조건 실행이 된다.

결과는, 둘다 실행이 된다.

[📜목차보기](#목차)

### if-else 문

* `if-else`문은 "~~하다면 ~~하고, 그렇지 않다면 ~~해라." 를 의미한다.

```javascript
const a = 10;
if (a > 15) {
  console.log('a 가 15 큽니다.');
} else {
  console.log('a 가 15보다 크지 않습니다.');
}
```
위 코드의 결과는 다음과 같다.
`"a 가 10보다 크지 않습니다."`

만약에 특정 조건이 만족할 때와 만족하지 않을 때 서로 다른 코드를 실행해야 된다면 if-else 구문을 사용 할 수 있다.

[📜목차보기](#목차)

### if-else if 문

* `if-else if` 문은 여러 조건에 따라 다른 작업을 해야 할 때 사용한다.

```javascript
const a = 10;
if (a === 5) {
  console.log('5입니다!');
} else if (a === 10) {
  console.log('10입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}
```

결과는 `'10입니다!'` 이다.

[📜목차보기](#목차)

### switch/case 문

* switch/case 문은 특정 값이 무엇이냐에 따라 다른 작업을 하고 싶을 때 사용한다.

```javascript
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break;
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('모르겠네요');
}
```

device의 값에 따라 다른 결과가 출력되는 코드이다.

`switch/case` 문은 이와 같이 특정 값이 무엇이냐에 따라 다른 작업을 수행 할 수 있게 해준다.

`switch/case` 문에서는 각 case 에서 실행할 코드를 작성하고 맨 마지막에 break; 를 해주어야 한다.
그렇지 않으면 그 다음 case 의 코드까지 실행해버린다.

그리고, 맨 아래의 default: 는 device 값이 우리가 case 로 준비하지 않은 값일 경우를 의미한다.

[📜목차보기](#목차)

## 함수

`함수`는, 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능이다.

함수를 만들 때는 function 키워드를 사용하며, 함수에서 어떤 값을 받아올지 정해주는데 이를 파라미터(매개변수)라고 부른다.

함수 내부에서 return 키워드를 사용하여 함수의 결과물을 지정 할 수 있다.

추가적으로, return 을 하게 되면 함수가 끝난다. 만약 다음과 같이 코드가 작성된다면, return 아래의 코드는 호출이 안된다.

```javascript
function add(a, b) {
  return a + b;
  console.log('호출이 되지 않는 코드!');
}

const sum = add(1, 2);
console.log(sum);
```

[📜목차보기](#목차)

### 화살표 함수 

* 함수를 선언하는 방식 중 또 다른 방법은 화살표 함수 문법을 사용 하는 것이다.

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
```

`function` 키워드 대신에 `=>` 문자를 사용해서 함수를 구현하였다, 화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어온다.

그런데, 만약에 위와 같이 코드 블록 내부에서 바로 return 을 하는 경우는 다음과 같이 줄여서 쓸 수도 있다.

```javascript
const add = (a, b) => a + b;
console.log(add(1, 2));
```

화살표 함수와 일반 function 으로 만든 함수와의 주요 차이점은 화살표 함수에서 가르키는 this 와 function 에서 가르키는 this 가 서로 다르다는 것이다, 이에 대한 자세한 내용은 추후에 알아보도록 하자.

[📜목차보기](#목차)

`여기서부터는 javascript clean code 작성법이다.`

## Clean-Code-Javascript

### 함수의 인자는 2개 이하가 이상적이다.

매개변수의 개수를 제한 하는 것은 함수 테스팅을 쉽게 만들어 주기 때문에 중요하다. 만약 매개변수가 3개 이상일 경우엔 테스트 해야하는 경우의 수가 많아지고 각기 다른 인수들로 여러 사례들을 테스트 해야한다.

1개나 2개의 인자를 가지고 있는 것이 가장 이상적인 케이스이다. 그리고 3개의 인자는 가능한 피해야만 한다. 만약 그것보다 더 많다면 통합되어야 한다. 만약 2개 이상의 인자를 가진 함수를 사용한다면 그 함수에게 너무 많은 역할을 하게 만든 것이다. 그렇지 않은 경우라면 대부분의 경우 상위 객체는 1개의 인자만으로 충분하다.

JavaScript를 사용할 때 많은 `보일러플레이트` 없이 바로 객체를 만들 수 있다. 그러므로 당신이 만약 많은 인자들을 사용해야 한다면 객체를 이용할 수 있다.

```markdown
# 보일러플레이트란?
컴퓨터 프로그래밍에서 보일러플레이트 또는 보일러플레이트 코드라고 부르는 것은 최소한의 변경으로 여러곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드를 말한다. 
```

함수가 기대하는 속성을 좀더 명확히 하기 위해서 `ES6`의 비구조화 구문을 사용할 수 있고 이 구문에는 몇가지 장점이 있다.
1. 어떤 사람이 그 함수의 시그니쳐(인자의 타입, 반환되는 값의 타입 등)를 볼 때 어떤 속성이 사용되는지 즉시 알 수 있습니다.
1. 또한 비구조화는 함수에 전달된 인수 객체의 지정된 기본타입 값을 복제하며 이는 사이드이펙트가 일어나는 것을 방지합니다. 참고로 인수 객체로부터 비구조화된 객체와 배열은 복제되지 않습니다.
1. Linter를 사용하면 사용하지않는 인자에 대해 경고해주거나 비구조화 없이 코드를 짤 수 없게 할 수 있습니다.
>ES6 가 뭔가요?
>
>ES6 는 ECMAScript6 를 의미하며, 자바스크립트의 버전을 가르킵니다. ES6는 2015년에 도입이 되었습니다. ES6 는 ES2015 라고 불리기도 합니다. 그리고 2015년 이후에 계속해서 새로운 자바스크립트 버전이 나오고 있습니다. ES7(ES2016) ES8(ES2017) ES9(ES2018) ES10(ES2019).. 새로운 자바스크립트 버전이 나올때마다 새로운 문법이 소개됩니다.
>
>브라우저 버전에 따라 지원되는 자바스크립트 버전이 다릅니다. 하지만, 보통 웹 개발을 할 때에는 Babel 이라는 도구를 사용하여 최신 버전의 자바스크립트가 구버전의 브라우저에서도 실행되도록 할 수 있습니다. (정확히는, 최신버전 자바스크립트를 구버전 형태로 변환하는 작업을 거칩니다.)

EX )
```javascript
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});
```
[📜목차보기](#목차)


#### Clean Code JavaScript에 대한 더 많은 내용을 원한다면 [여기로](https://github.com/qkraudghgh/clean-code-javascript-ko#%ED%95%A8%EC%88%98functions)

## 객체

* 객체는 우리가 [변수](#변수) 혹은 [상수](#상수)를 사용하게 될 때 하나의 이름에 여러 종류의 값을 넣을 수 있게 해준다.

```javascript
const dog = {
  name: '멍멍이',
  age: 2
};
```

객체를 선언 할 때에는 이렇게 { } 문자 안에 원하는 값들을 넣어주면 된다. 
값을 집어 넣을 때에는 `키: 원하는 값` 의 형태로 넣으며, 키에 해당하는 부분은 공백이 없어야한다.
만약에 공백이 있어야 하는 상황이라면 이를 따옴표로 감싸서 문자열로 넣어주면 된다.

EX ) 
```javascript
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);
```
[📜목차보기](#목차)

### 함수에서 객체를 파라미터(매개변수)로 받기

* 함수를 새로 생성하여 만든 객체를 파라미터로(매개변수)로 받아와서 사용한다.

EX ) 
```javascript
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
    hero.actor
  } 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```
[📜목차보기](#목차)
### 객체 비구조화 할당
>이 문법은 "객체 구조 분해" 라고 불리기도 한다.

print 함수를 보면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 hero. 를 입력하고 있는데, 객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있다.

```javascript
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```

이 코드에서 `const { alias, name, actor } = hero;` 이 부분이 객체에서 값들을 추출하여 새로운 상수로 선언해 주는 것이다. 여기서 더 나아가면, 파라미터 단계에서 객체 비구조화 할당을 할 수 있다.

```javascript
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

function print({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);
```
[📜목차보기](#목차)
### 객체 안에 함수 넣기

* 객체 안에 함수를 넣을 수 있다.

```javascript
const dog = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

dog.say();
```

함수가 객체안에 들어가게 되면, this 는 자신이 속해있는 객체를 가르키게 돤다.

함수를 선언 할 때에는 이름이 없어도 된다.

```markdown
만약 객체 안에 함수를 넣을 때, 화살표 함수로 선언한다면 제대로 작동하지 않을 것이다.
이유는, function 으로 선언한 함수는 this 가 제대로 자신이 속한 객체를 가르키게 되는데,
화살표 함수는 그렇지 않기 때문이다.
```

[📜목차보기](#목차)

### Getter 함수와 Setter 함수

* 객체 안에 Getter 함수와 Setter 함수를 설정하는 방법 

객체를 만들고 나면, 다음과 같이 객체안의 값을 수정 할 수도 있다.

Getter 함수와 Setter 함수를 사용하게 되면 특정 값을 바꾸려고 하거나, 
특정 값을 조회하려고 할 때 우리가 원하는 코드를 실행 시킬 수 있습니다.

* Getter

```javascript
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
```

`numbers.sum()` 을 한 것이 아니라 `number.sum` 을 조회했을 뿐인데, 함수가 실행되고 그 결과값이 출력되었다.

이런식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환한다.

* Setter 

```javascript
const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  calculate() {
    console.log('calculate');
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    console.log('a가 바뀝니다.');
    this._a = value;
    this.calculate();
  },
  set b(value) {
    console.log('b가 바뀝니다.');
    this._b = value;
    this.calculate();
  }
};

console.log(numbers.sum);
numbers.a = 5;
numbers.b = 7;
numbers.a = 9;
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);
```

Setter 함수를 설정 할 때에는 함수의 앞부분에 `set` 키워드를 붙인다.

Setter 함수를 설정하고 나면, numbers.a = 5 이렇게 값을 설정했을 때 5 를 함수의 파라미터로 받아오게 된다. 위 코드에서는 객체 안에 _a, _b 라는 숫자를 선언해주고, 이 값들을 위한 Getter 와 Setter 함수를 설정해주었다.

아까 전에는 만든 객체에서는 numbers.sum 이 조회 될 때마다 덧셈이 이루어졌었지만, 이제는 a 혹은 b 값이 바뀔 때마다 sum 값을 연산한다.

[📜목차보기](#목차)

## 배열

* 객체는 한 변수 혹은 상수에 여러가지 정보를 담기 위함이였다면
  배열은 여러개의 항목들이 들어있는 리스트와 같다.

- 숫자 배열
`const array = [1, 2, 3, 4, 5];`

배열을 선언 할 때에는 이렇게 [ ] 안에 감싸주면 된다.

배열 안에는 어떤 값이던지 넣을 수 있다.

- 객체 배열
`const objects = [{ name: '멍멍이' }, { name: '야옹이' }];`

배열을 선언하고 나서, n 번째 항목을 조회하고 싶을 땐 다음과 같이 할 수 있다.

`objects[n];`

[📜목차보기](#목차)
### 배열에 새 항목 추가하기

* 배열에 새로운 항목을 추가 할 때에는 배열이 지니고있는 내장 함수인 `push` 함수를 사용한다.

```javascript
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

objects.push({
  name: '멍뭉이'
});

console.log(objects);
```

[📜목차보기](#목차)

### 배열의 크기 알아내기
* 배열의 크기를 알아낼 때에는 배열의 `length` 값을 확인합니다.

```javascript
const objects = [{ name: '멍멍이' }, { name: '야옹이' }];

console.log(objects.length);

objects.push({
  name: '멍뭉이'
});

console.log(objects.length);
```

[📜목차보기](#목차)

## 반복문

* 반복문은 특정 작업을 반복적으로 할 때 사용할 수 있는 구문이다.

### for

* for 문은 가장 기본적인 반복문이다.
  특정 값에 변화를 주어가면서 자신이 정한 조건이 만족된다면 계속 반복한다.

for 문은 다음과 같이 사용한다.

```javascript
for (초기 구문; 조건 구문; 변화 구문;) {
  코드
}
```

for 문을 사용 할 때 보통 i++ 를 해서 1씩 증감하는 형태로 사용한다. 그런데, 1씩 빼는 형태도 가능하다.

```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```
[📜목차보기](#목차)

### 배열과 for

* 배열과 for 문을 활용할 수 있다.

```javascript
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```
이렇게 하면 names 배열 안에있는 원소들을 하나하나 나열 할 수 있다.

[📜목차보기](#목차)

### while

* while문은 특정 조건이 참이라면 계속해서 반복하는 반복문이다. 
  for 문은 특정 숫자를 가지고 숫자의 값을 비교하고, 증감해주면서 반복을 한다면,
  while문은 조건을 확인만 하면서 반복을 합니다. 때문에, 조건문 내부에서 변화를 직접 주어야 합니다.

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

* while 문을 사용 할 때에는 조건문이 언젠간 false 가 되도록 신경쓰도록 하자. 만약에 언젠간 false 로 전환이 되지 않는다면 반복문이 끝나지 않고 영원히 반복되게 된다.

[📜목차보기](#목차)

### for...of

* `for...of`문은 배열에 관한 반복문을 돌리기 위해서 만들어진 반복문입니다.

>사실 이 구문은 배워놔도 사용 할 일이 별로 없다. 보통 배열을 반복할때에는 배열의 내장함수를 많이 사용한다. 그래도 알아만 두도록 하자.

```javascript
let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
  console.log(number);
}
```
[📜목차보기](#목차)

### 객체를 위한 반복문 for...in

객체를 위한 반복문을 알아보기 전에, 객체의 정보를 배열 형태로 받아올 수 있는 함수 몇가지를 알아보자.

```javascript
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));
```
각 함수들의 역할
* `Object.entries`: `[[키, 값], [키, 값]]` 형태의 배열로 변환
* `Object.keys`: `[키, 키, 키]` 형태의 배열로 변환
* `Object.values`: `[값, 값, 값]` 형태의 배열로 변환

객체가 지니고 있는 값에 대하여 반복을 하고 싶다면 위 함수들을 사용해도 되고, for...in 구문을 사용해도 된다.
```javascript
const doggy = {
  name: '멍멍이',
  sound: '멍멍',
  age: 2
};

for (let key in doggy) {
  console.log(`${key}: ${doggy[key]}`);
}
```
[📜목차보기](#목차)

### break 와 continue

* 반복문 안에서는 `break` 와 `continue` 를 통하여 반복문에서 벗어나거나, 다음 루프를 돌게끔 할 수 있다.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 2) continue; // 다음 루프를 실행
  console.log(i);
  if (i === 5) break; // 반복문을 끝내기
}
```

[📜목차보기](#목차)

## 배열 내장함수

* 배열을 다룰 때 알고있으면 유용한 다양한 내장 함수들

### forEach

`forEach` 는 가장 쉬운 배열 내장함수이다. 기존에 우리가 배웠던 for 문을 대체 시킬 수 있다

만약, 배열 안에 있는 모든 원소들을 모두 출력해야 한다면 for 문을 사용하여 다음과 같이 구현 할 수 있다,
```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}
```

하지만, 배열의 forEach 함수를 사용하면 다음과 같이 구현 할 수 있다.

```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero => {
  console.log(hero);
});
```

`forEach` 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다. 이 함수의 파라미터 hero는 각 원소를 가르키게 된다.

이렇게 함수형태의 파라미터를 전달하는 것을 `콜백함수` 라고 부른다. 함수를 등록해주면, `forEach` 가 실행을 해주는 것이다.

[📜목차보기](#목차)

## map

* `map` 은 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어진다.

이러한 배열이 있다고 가정해보자,

`const array = [1, 2, 3, 4, 5, 6, 7, 8];`

만약에 배열 안의 모든 숫자를 제곱해서 새로운 배열을 만들고 싶다면 
map 함수를 사용하지 않고 우리가 지금까지 배운 지식들을 활용하면 다음과 같이 구현 할 수 있다.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);
```

또는 위에서 공부한 forEach 를 쓰면 다음과 같이 구현 가능하다.

```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const squared = [];

array.forEach(n => {
  squared.push(n * n);
});

console.log(squared);
```

하지만 map을 사용하면 조금 더 짧은 코드를 작성 가능하다.
```javascript
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);
console.log(squared);
```

map 함수의 파라미터로는 변화를 주는 함수를 전달해줍니다. 이를 변화함수라고 부르겠다.

현재 우리의 변화함수 square 는 파라미터 n 을 받아와서 이를 제곱해줍니다.

array.map 함수를 사용 할 때 square 를 변화함수로 사용함으로서, 내부의 모든 값에 대하여 제곱을 해서 새로운 배열을 생성하였다.

변화 함수를 꼭 이름을 붙여서 선언 할 필요는 없다.

[📜목차보기](#목차)

## indexOf

* `indexOf` 는 원하는 항목이 몇번째 원소인지 찾아주는 함수입니다.

다음과 같은 배열이 있을 때 
`const superheroes = ['빨강', '주황', '노랑', '초록'];`

노랑이 몇번째 항목인지 궁금하다고 가정했을 때
```javascript
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);
```
이렇게 입력할 수 있다.

[📜목차보기](#목차)

## findIndex

* 배열 안에 있는 값이 객체이거나, 배열이라면 indexOf 로 찾을 수 없다.

다음과 같은 배열이 있다고 하자.

```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];
```

여기서 만약 id 가 3 인 객체가 몇번째인지 찾으려면, findIndex 함수에 검사하고자 하는 조건을 반환하는 함수를 넣어서 찾을 수 있다.

```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);
```

결과 값은 2가 나오게 된다.

[📜목차보기](#목차)

## find

* `find` 함수는 `findIndex` 랑 비슷한데, 찾아낸 값이 몇번째인지 알아내는 것이 아니라, 찾아낸 값 자체를 반환한다.

위의 예제와 연결하였을 때,
```javascript
const todo = todos.find(todo => todo.id === 3);
console.log(todo);
```

결과는 이렇게 나오게 된다.

`{id: 3, text: "객체와 배열 배우기", done: true}`

[📜목차보기](#목차)

## filter

* `filter` 함수는 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다. 예를 들어서, 위에서 만들었던 todos 배열에서 done 값이 false 인 항목들만 따로 추출해서 새로운 배열을 만들어보았다.

```javascript
const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);
```

결과 값은 아래와 같이 나온다.

```javascript
[
  {
    id: 4,
    text: '배열 내장 함수 배우기',
    done: false
  }
];
```

filter 함수에 넣는 파라미터는 조건을 검사하는 함수를 넣어주며, 이 함수의 파라미터로 각 원소의 값을 받아오게 된다.

위에서 작성한 코드는 이렇게 입력 할 수도 있다.

`const tasksNotDone = todos.filter(todo => !todo.done);`

filter 에 넣어준 함수에서 true 를 반환하면 새로운 배열에 따로 추출을 해주는데, 만약 todo.done 값이 false 라면, !false 가 되고 이 값은 true 이기 때문에, 이전의 todo.done === false 와 똑같이 작동하게 된다.

[📜목차보기](#목차)

## splice

* splice 는 배열에서 특정 항목을 제거할 때 사용한다.

`const numbers = [10, 20, 30, 40];`

이 배열에서 30을 지운다고 가정할 때, 30이 몇번째 index 인지 알아낸 이후, 이를 splice 를 통해 지워줄 수 있다.

```javascript
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
numbers.splice(index, 1);
console.log(numbers);
```

splice 를 사용 할 때 첫번째 파라미터는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미한다.

[📜목차보기](#목차)

## slice

* slice 는 splice 랑 조금 비슷하고, 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들이지 않는 다는 것이다.

```javascript
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 30, 40]
```

slice 에는 두개의 파라미터를 넣게 되는데 첫번째 파라미터는 어디서부터 자를지, 그리고 두번째 파라미터는 어디까지 자를지 를 의미한다.

[📜목차보기](#목차)

## shift 와 pop

* `shift` 와 `pop` 은 비슷하지만, 다르다.
`shift` 는 첫번째 원소를 배열에서 추출해줍니다. (추출하는 과정에서 배열에서 해당 원소는 사라짐)

shift 예제
```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.shift();
console.log(value);
console.log(numbers);
```

위 예제의 결과

`10
[20, 30, 40]`

pop 예제

```javascript
const numbers = [10, 20, 30, 40];
const value = numbers.pop();
console.log(value);
console.log(numbers);
```

위 예제의 결과

`40
[10, 20, 30]`

`pop` 은 `push` 의 반대로 생각하면 될 것 같다. `push` 는 배열의 맨 마지막에 새 항목을 추가하고, `pop` 은 맨 마지막 항목을 추출합니다.

[📜목차보기](#목차)

## unshift

* `unshift`는 `shift`의 반대 이다.

위의 예제에서 맨 앞에 새 원소를 추가하면
```javascript
const numbers = [10, 20, 30, 40];
numbers.unshift(5);
console.log(numbers);
```
다음과 같은 결과가 나온다.
`[5, 10, 20, 30, 40]`

[📜목차보기](#목차)

## concat

`concat`은 여러개의 배열을 하나의 배열로 합쳐준다.

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
```

`concat` 함수는 arr1 과 arr2 에 변화를 주지 않습니다.

[📜목차보기](#목차)

## join

`join`은 배열 안의 값들을 문자열 형태로 합쳐준다.

```javascript 
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5
```

[📜목차보기](#목차)

## reduce

`reduce` 함수는 잘 사용 할 줄 알면 정말 유용한 내장 함수이다.`잘 사용 못하니 공부하도록 하자`

예제 ) 만약 주어진 배열에 대하여 총합을 구해야 하는 상황이 왔다고 가정해보도록 하자.

```javascript
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
numbers.forEach(n => {
  sum += n;
});
console.log(sum);
```

`결과는 15가 나온다`

여기서 sum 을 계산하기 위해서 사전에 sum 을 선언하고, forEach 를 통하여 계속해서 덧셈을 해주었다.

여기서 reduce 라는 함수를 사용하면 다음과 같이 구현 할 수 있다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = array.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum);
```

`reduce` 함수에는 두개의 파라미터를 전달한다. 
첫번째 파라미터는 accumulator 와 current 를 파라미터로 가져와서 결과를 반환하는 콜백함수이고, 
두번째 파라미터는 reduce 함수에서 사용 할 초깃값이다.

여기서 accumulator 는 누적된 값을 의미한다.

`reduce`함수를 이용하면

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum);
```

이 코드의 실행 결과는 
```javscript
> Object {accumulate : 0, current : 1}
> Object {accumulate : 1, current : 2}
> Object {accumulate : 3, current : 3}
> Object {accumulate : 6, current : 4}
> Object {accumulate : 10, current : 5}
15
```

배열을 처음부터 끝까지 반복하면서 우리가 전달한 콜백 함수가 호출이 되었다, 가장 처음엔 accumulator 값이 0 이다. 이 값이 0인 이유는 우리가 두번째 파라미터인 초깃값으로 0을 설정했기 때문이다.

처음 콜백 함수가 호출되면, 0 + 1 을 해서 1이 반환이 된다. 이렇게 1일 반환되면 그 다음 번에 콜백함수가 호출 될 때 accumulator 값으로 사용된다.

콜백함수가 두번째로 호출 될 땐 1 + 2 를 해서 3이되고, 이 값이 세번째로 호출될 때의 accumulator 가 된다.

그래서 계속 누적돼어 15라는 결과물이 나타나게 된다.

reduce 를 사용해서 평균도 계산 할 수 있다. 평균을 계산하려면, 가장 마지막 숫자를 더하고 나서 배열의 length 로 나누어주어야 한다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum);
```

위 코드의 reduce 에서 사용한 콜백함수에서는 추가 파라미터로 index 와 array 를 받아왔다. 
index 는 현재 처리하고 있는 항목이 몇번째인지 가르키고, array 는 현재 처리하고 있는 배열 자신을 의미한다.

[📜목차보기](#목차)

## 프로토타입과 클래스

### 객체 생성자

* 프로토타입과 클래스에 대해서 알아보기 전에 우선 객체 생성자라는 것을 알아야 한다. 
객체 생성자는 함수를 통해서 새 객체를 만들고 그 안에 넣고 싶은 값 또는 함수들을 구현 할 수 있게 해준다.
```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
  this.say = function() {
    console.log(this.sound);
  };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```
결과는 순서대로 멍멍,야옹이 출력된다.

객체 생성자를 사용 할 때는 보통 함수의 이름을 대문자로 시작하고, 새로운 객체를 만들 때에는 `new` 키워드를 앞에 붙여주어야 한다.

지금 위 코드를 보시면, dog 가 가지고 있는 say 함수와 cat 이 가지고 있는 수행하는 코드가 똑같음에도 불구하고 객체가 생성 될 때 마다 함수도 새로 만들어져서 this.say 로 설정이 되고 있다.


[📜목차보기](#목차)

### 프로토타입

* `프로토타입`은 다음과 같이 객체 생성자 함수 아래에 `.prototype.[원하는키] = 코드`를 입력하여 설정 할 수 있다. 또 위의 예제에서 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
```

결과는 객체 생성자 예제의 결과물에 순서대로 1,1 이 추가된다.

[📜목차보기](#목차)

### 객체 생성자 상속받기

예시로 Cat 과 Dog 라는 새로운 객체 생성자를 만든다고 가정해보자. 그리고, 해당 객체 생성자들에서 Animal 의 기능을 재사용한다고 가정해보도록 하자. 그렇다면, 이렇게 구현 할 수 있을 것이다.

```javascript
function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}

Animal.prototype.say = function() {
  console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

function Dog(name, sound) {
  Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;

function Cat(name, sound) {
  Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
```

새로 만든 Dog 와 Cat 함수에서 Animal.call 을 호출해주고 있는데, 여기서 첫번째 인자에는 this 를 넣어주어야 하고, 그 이후에는 Animal 객체 생성자 함수에서 필요로 하는 파라미터를 넣어주어야 한다.

추가적으로 prototype 을 공유해야 하기 때문에 상속받은 객체 생성자 함수를 만들고 나서 prototype 값을 Animal.prototype 으로 설정해주었다.

[📜목차보기](#목차)

## 클래스 

ES6 에서부터는 `class` 라는 문법이 추가되었다, 우리가 객체 생성자로 구현했던 코드를 조금 더 명확하고, 깔끔하게 구현 할 수 있게 해준다. 추가적으로, 상속도 훨씬 쉽게 해줄 수 있다.

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();
```

여기서 우리가 say 라는 함수를 클래스 내부에 선언했는데, 클래스 내부의 함수를 '메서드'라고 부른다. 이렇게 메서드를 만들면 자동으로 prototype 으로 등록이 된다.

결과는 순서대로 멍멍,야옹 이다.

`class`를 사용했을 때, 다른 클래스를 쉽게 상속 할 수 있다.

```javascript
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    super('개', name, sound);
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super('고양이', name, sound);
  }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();
```

결과는 위 예제의 결과와 동일하다.

상속을 할 때는 `extends` 키워드를 사용하며, constructor에서 사용하는 `super()` 함수가 상속받은 클래스의 생성자를 가르킵니다.

[📜목차보기](#목차)