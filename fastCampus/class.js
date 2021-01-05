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
class A {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
    set name(value) {
        this._name = value + '!!!';
    }
}
const a = new A();
console.log(a);
a.name = 'Hong';
console.log(a);
console.log(a.name);
console.log(a._name);

// readonly

class B {
    _name = 'no name';

    get name() {
        return this._name + '@@@';
    }
}

const b = new B();
console.log(b);
b.name = 'Hong';
console.log(b);