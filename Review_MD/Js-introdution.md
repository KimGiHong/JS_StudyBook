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
9.프로토타입 & 클래스  

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
let name = '좌봐스크립트';
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
    console.log('모르겠네요..');
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

