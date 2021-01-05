//객체를 만들 수 있는 새로운 방법 Class
//선언적 방식
// class A {}

// console.log(new A());

// class 표현식을 변수에 할당
// const B = class {};

// console.log(new B());

// 선언적 방식이지만 호이스팅은 일어나지 않는다.
// new C();

// class C{};

//constructor 생성자

// class A {}

// console.log(new A());

// class B {
//     constructor() {
//         console.log('constructor');
//     }
// }
// console.log(new B());

// class C {
//     constructor(name,age) {
//         console.log('constructor',name ,age);
//     }
// }

// console.log(new C('Hong', 17));
// console.log(new C());

//멤버 변수 <객체의 프로퍼티>
// class A {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// console.log(new A('Hong', 17));

//class field는 런타임 확인

// class B { //런타임 항시 확인
//     name; //this.name
//     age; //this.age
// }
// console.log(new B());

// class C {
//     name = 'no name';
//     age = '0';

//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// console.log(new C('Hong', 17));

//멤버 함수

// class A{
//     hello1() {
//         console.log('hello1',this); //this는 자신을 사용하는 함수 설명?
//     }
//     hello2 = () => {
//         console.log('hello2',this);
//     };
// }

// new A().hello1();
// new A().hello2();

// class B {
//     name = 'Hong';

//     hello() {
//         console.log('hello', this.name);
//     }
// }

// new B().hello();

//get,set 게터 세터
// class A {
//     _name = 'no name';

//     get name() {
//         return this._name + '@@@';
//     }
//     set name(value) {
//         this._name = value + '!!!';
//     }
// }
// const a = new A();
// console.log(a);
// a.name = 'Hong';
// console.log(a);
// console.log(a.name);
// console.log(a._name);

// readonly

// class B {
//     _name = 'no name';

// class A {
//     static age = 18;
//     static hello() {
//         console.log(A.age);
//     }
// }
// console.log(A,A.age);
// A.hello();

// class B {
//     age = 18;
//     static hello() {
//         console.log(this.age);
//     }
// }
// console.log(B,B.age);
// B.hello();
//new B().hello(); //static함수이기때문에 객체에 속해있는 함수가 아니여서 에러가 남

// class C {
//     static name = '이 클래스의 이름을 C가 아니다.'
// }

// console.log(C);

//상속 기본 extends

// class Parent {
//     name = 'KIM';

//     hello(){
//         console.log('hello' , this.name);
//     }
// }

// class Child extends Parent {

// }

// const p = new Parent();
// const c = new Child();
// console.log(p,c);

// c.hello();
// c.name = 'Hong';
// c.hello();

//override 클래스의 상속 멤버 변수 및 함수 오버라이딩,추가

// class Parent{
//     name = 'KIM'

//     hello() {
//         console.log('hello',this.name);
//     }
// }

// class Child extends Parent{
//     age = 18;

//     hello() {
//         console.log('hello',this.name,this.age);
//     }
// }

// const p = new Parent();
// const c = new Child();
// console.log(p,c);
// c.hello();
// c.name = 'Hong';
// c.hello();

//super 클래스의 상속 생성자 함수 변경

// class Parent {
//     name;

//     constructor(name) {
//         this.name = name;
//     }
//     hello() {
//         console.log('hello',this.name);
//         }
// }

// class Child extends Parent{
//     age;

//     constructor(name,age) {
//         super(name);
//         this.age = age;
//     }

//     hello() {
//         console.log('hello',this.name,this.age);
//     }
// }

// const p = new Parent('Mark');
// const c = new Child('Mark',18);

// console.log(p,c);
// c.hello();
// c.name = 'Hong';
// c.age = '28';
// c.hello();

//static 상속
//static변수도 정상 상속가능
// class Parent{
//     static age = 18;
// }
// class Child extends Parent{}
// console.log(Parent.age,Child.age);