//함수를 만들 때 사용하는 키워드 -> function

// function hello1() {
//     console.log('hello1');
// }

// console.log(hello1, typeof hello1);

//함수의 매개변수
//함수를 호출할 때 값을 지정

// function hello2(name) {
//     console.log('hello2',name);
// }

//함수의 리턴
//함수를 실행하면 얻어지는 값

// function hello3(name) {
//     return `hello3 ${name}`;
// }

// console.log(hello3('Hong'));

//선언적 function과 익명 함수를 만들어 변수에 할당

// function hello1(){         //위 아래 코드의 순서를 바꿔도 정상으로 작동
//     console.log('hello1'); //어디있든지간에 먼저 사용됨
// }

// hello1();

// var hello2 = function() {   //변수를 지정하기 전에 함수가 지정된 변수명을 호출하면 undefined 출력
//     console.log('hello2');  //결과는 함수임을 인지 못하여 생기는 에러이다
// }

// const hello3 = function(){ //hello3을 먼저 호출시 정의하지 못함
//     console.log('hello3');
// }

//const hello = new Function(); 생성자 함수로 함수를 만드는 방법

//new Function(인자1,인자2, ... ,함수의 바디)

//const sum = new Function('a','b','c','return a + b + c');
//선언적 함수를 사용하는 방식이 아니기 때문에 위에서 호출하게 되면 오류 발생
//console.log(sum(1,2,3));

//function과 new Function의 차이점

//안에 들어있는 변수가 상위 스코프(범위)에 있는 지역변수에 접근 불가
// globalThis.a = 0;

// {
//     const a = 1;
//     const test = new Function('return a');

//     console.log(test());
// }
// {
//     const a = 2;
//     const test = function(){
//         return a;
//     };
//     console.log(test());
// }

//arrow 함수를 만들어 이름이 hello1인 변수에 할당

// const hello1 = () => { //익명함수 선언적 방식 X
//     console.log('hello1');
// }

//함수의 매개변수
//함수를 호출할 때 값을 지정

//매개변수가 하나일 때, 괄호 생략 가능

// const hello2 = (name) => {
//     console.log('hello2',name);
// };

// const hello3 = (name,age) => {
//     console.log('hello3',name,age);
// };

//함수의 리턴
//함수를 실행하면 얻어지는 값

// const hello4 = name =>{
//     return `hello4 ${name}`;
// }

// const hello5 = name => `hello5 ${name}`; //간단하고 이쁜 코드 작성가능

//new 함수(); -> 생성자 함수

//생성자 함수를 이용하여 새로운 객체를 만들어 내는 방법

// function Person(name , age) {
//     console.log(this);
//     this.name = name;
//     this.age = age;
// }

// const p = new Person('Hong' ,17);

// console.log(p,p.name,p.age);

// const a = new Person('Gong',17);

// console.log(a,a.name,a.age);

//arrow 함수에서는 생성자 함수로서 사용 불가

// const Cat = (name,age) => {
//     this.name = name;
//     this.age = age;
// }

// const c = new Cat('하이',1); //arrow함수안에서는 this가 생길 수 없음

//함수 안에서 함수를 만들어 리턴

// function plus(base) {
//     return function(num){
//         return base + num;
//     }
// }

// const plus5 = plus(5);
// plus5(10);

// console.log(plus5(10));

// const plus7 = plus(7);
// console.log(plus7(8));

//함수를 호출할 때,인자로 함수를 사용
//함수를 선언한 변수 안에 함수를 또 호출 가능
// function hello(c){
//     console.log('hello');
//     c();
// }

// hello(function() {
//     console.log('콜백');
// });
