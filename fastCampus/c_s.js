//Conditional Statements 조건문
//표현식이 참으로 평가될 때,실해되는 블럭

/*
if(표현식){
    표현식이 차믕로 평가될 때, 실행되는 문장들의 모음
}
*/

// if(true){
//     console.log('항상 실행');
// }

// if(false){
//     console.log('항상 실행되지 않음');
// }

//if문의 코드가 한줄이면 {}생략 가능

// if(true) console.log('항상 실행');
// if(false) console.log('항상 실행되지 않음');

//표현식이 거짓으로 평가될 때
//Falsy = false,, 0 ,",null,undefined,NaN
//표현식이 참으로 평가될 때
//Truethy = Falsy의 반대

//Falsy한 값들
// if(false) console.log(false);
// if(0) console.log(false);
// if('') console.log('');
// if(null) console.log(null);
// if(undefined) console.log(undefined);
// if(NaN) console.log(NaN);

//Truethy한 값들
// if(true) console.log(true);
// if(37) console.log(37);
// if(-37) console.log(-37);
// if('Hong') console.log('Hong');
// if({}) console.log({});
// if([]) console.log([]);

//if () {} else {}
// const n = 37;

// if(n>0) {
//     console.log('n이 0보다 큰 경우');
// }else {
//     console.log('n이 0보다 크지 않은 경우');
// }

//블록 안 문장이 하나일 경우, 중괄호 없이 사용가능
// if (n>0) console.log('n이 0보다 큰 경우');
// else console.log('n이 0보다 크지 않은 경우');

//if () {}else if () {} else {}

// const n = 15;

// if(n % 3 === 0) {
//     console.log('n은 3의 배수 입니다.');
// }else if(n % 5 === 0) {
//     console.log('n은 5의 배수 입니다.');
// } else {
//     console.log('n은 3의 배수,5의 배수도 아닙니다.');
// }

// n이 3의 배수이면서 5의 배수일때

// if(n % 3 === 0 && n % 5 === 0) {
//     console.log('n은 15의 배수입니다.');
// } else if(n % 3 === 0) {
//     console.log('n은 3의 배수입니다.');
// } else if(n % 5 === 0) {
//     console.log('n은 5의 배수입니다.');
// } else {
//     console.log('n은 3의 배수,5의 배수도 아닙니다.');
// }

//n % 3 === 0 과 n % 5 === 0 의 값은 여러번 반복되므로 , 변수나 상수에 넣는다.

// const multipleOfThree = n % 3 === 0;
// const multipleOfFive = n % 5 === 0;

// if(multipleOfThree && multipleOfFive) {
//     console.log('n은 15의 배수입니다.');
// } else if(multipleOfThree) {
//     console.log('n은 3의 배수입니다.');
// } else if(multipleOfFive) {
//     console.log('n은 5의 배수입니다.');
// } else {
//     console.log('n은 3의 배수,5의 배수도 아닙니다.');
// }

// if(multipleOfThree && multipleOfFive) {
//     console.log('n은 15의 배수입니다.');
// } else {
//     if(multipleOfThree) {
//         console.log('n은 3의 배수입니다.');
//     } else if(multipleOfFive) {
//         console.log('n은 5의 배수입니다.');
//     } else {
//         console.log('n은 3의 배수,5의 배수도 아닙니다.');
//     }
// }

//논리 연산자를 이용한 조건문 평가

// 표현식 && 표현식 <AND연산자>

// if(true && true) {
//     console.log('두개 모두 참이면 결과는 참');
// }

// if(true && false) {
//     console.log('둘중 하나만 참일시 결과는 거잣');
// }

// if(false && false) {
//     console.log('두개 모두 거짓이면 결과는 거짓');
// }

//표현식 || 표현식 <OR연산자>

// if(true || true) {
//     console.log('두개 모두 참이면 참');
// }

// if(true || false) {
//     console.log('한개만 참이면 참');
// }

// if(false || true) {
//     console.log('한개만 참이면 참');
// }

// if(false || false) {
//     console.log('두개 모두 거짓이면 거짓');
// }

//!표현식

// if(!true) {
//     console.log('참이면 거짓,거짓이면 참');
// }

//논리 연산자를 이용한 조건부 실행

// let n = 5;

// (n % 5 === 0) && console.log('5로 나누어 떨어질때만 실행');

// 앞 표현식의 평가 결과가 거짓일때는 뒤 표현식을 평가할 필요가 없어서 실행하지 않는다
// -> 걍 앞에 틀리면 뒤에는 하지도 않는다

// n = 6;

// (n % 5 === 0) && console.log('5로 나누어 떨어질때만 실행');

//표현식 || 표현식
// 앞 표현식을 평가를 해서 참이면 , 뒤 표현식을 평가할 필요가 없어 실행  X
// n = 5;

// n % 5 === 0 || console.log('5로 나누어 떨어지지 않을 때만 실행');

// n = 6;

// n % 5 === 0 || console.log('5로 나누어 떨어지지 않을 떄만 실행');

//삼항 연산자를 이용한 조건부 실행
// let n = 5;

// console.log(n % 5 === 0 ? '5의 배수 입니다' : '5의 배수가 아닙니다');

//표현식의 결과를 변수에 할당할 수 있습니다.

// const message = n % 5 === 0 ? '5의 배수 입니다' : '5의 배수가 아닙니다';
// console.log(message);

// let n = 5;

// switch(n) {
//     default:
//         console.log(n);
// }

//n이 5로 나뉘어졌을때 나머지가 0인경우

// switch(n % 5) {
//     case 0:{
//         console.log('5의 배수입니다.');
//     }
//     default:
//         console.log(n);
// }

// switch(n % 5) {
//     case 0:{
//         console.log('5의 배수입니다.');
//         break;
//     }
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log('5의 배수가 아닙니다.')
//     default:
//         console.log(n);
// }

//new Object() <object로 객체 만들기>
//기초 객체

// const a = new Object();

// console.log(a, typeof a);

// const b = new Object(true);

// console.log(b, typeof b);

// const c = new Object({name : 'Hong'}); //문자 그대로 출력하는 객체 리터럴 객체?함수?

// console.log(c, typeof c);

//Prototype Chain <프로토타입 체인> .prototype

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
//     // this.hello = function() {
//     //     console.log('hello',this.name,this.age);
//     // };
// }

// Person.prototype.hello = function() {
//     console.log('hello',this.name, this.age);
// }

// const p = new Person('Hong',17);

// p.hello();
// console.log(p.toString());

// console.log(Person.prototype);
// console.log(Person.prototype.toString);
// console.log(Person.prototype.constructor);
// console.log(Person.prototype.hello);

// console.log(Object.prototype);
// console.log(Object.prototype.toString);
// console.log(Object.prototype.constructor);

//Prototype 이해하기
// function Person() {}

// Person.prototype.eyes = 2;
// Person.prototype.nose = 1;

// var kim = new Person();
// var park = new Person();

// console.log(kim.eyes);
// console.log(park.nose);

//요약 : Person.prototype이라는 빈 Object가 어딘가에 존재하고, 
//Person함수로부터 생성된 객체(kim,park)들은 어딘가에 존재하는 Object에 들어있는
//값을 모두 가져다 쓸수 있다.

// console.log(p instanceof Person);
// console.log(p instanceof Object);
//p라는 객체는 person이라고 하는 생성자 함수로 나왔는데 그 person이라 하는것은
//object로부터 프로토타입 체인을 받아온 후에 내가 설정한 어떤 함수,property를 가지고있는 형태

//프로토타입을 이용한 객체 확장

// function Person() {}

// Person.prototype.hello = function() {
//     console.log('hello');
// }

// function Korean(region) {
//     this.region = region;
//     this.where = function() {
//         console.log('where',this.region);
//     };
// }

// Korean.prototype = Person.prototype;

// const k = new Korean('Seoul');

// k.hello(); //hello값을 그대로 가져와 hello출력
// k.where(); //korean이라는 함수안 region에 seoul이라는 값을 넣어 'where Seoul'출력

// console.log(k instanceof Korean);
// console.log(k instanceof Person); //korean의 프로토타입 체인
// console.log(k instanceof Object); //모두를 프로토타입으로 가지고 있는것


//객체 리터럴

// const a = {};

// console.log(a, typeof a);

// const b = {
//     name: 'Hong'
// };

// console.log(b,typeof b);

// const c = {
//     name:'Hong',
//     hello1() {
//         console.log('hello1',this.name);
//     },
//     hello2: function(){
//         console.log('hello2',this.name);
//     },
//     hello3: () => {
//         console.log('hello3',this); //this가 이 객체를 가르키지 않고 name을 쓸시 undefined출력
//     },
// };

// c.hello1();
// c.hello2();
// c.hello3();


//표준 내장 객체 : Array

// const a = new Array('red','black','white');

// console.log(a,typeof a);
// console.log(a instanceof Array);
// console.log(a instanceof Object);

// //Instanceof : instanceof 는 비교 연산자로 >,<,== 와 같이 두개의 인자를 받는 
// //연산자로 앞의 비교 연산자들을 이용하는 기분으로 사용하면 된다. 
// //하지만 결과로 리턴하는 것은 typeof와는 성질이 조금 다르다. 
// //instanceof는 해당하는 변수가 사용하고 있는 prototype의 chain을 2번째 인자와 쭉 비교해서 
// //true/false 값을 리턴한다.

// const b = ['red','green','blue'];

// console.log(b,typeof b);
// console.log(b instanceof Array);
// console.log(b instanceof Object);

// console.log(b.slice(0,1)); //array에 들어있는 함수 프로토타입 체인에 들어있는것
// console.log(Array.prototype.slice,Object.prototype.slice); //프로토타입 체인상 array가 추가로 구현한 함수이다.