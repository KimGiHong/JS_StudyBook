//함수,클래스(틀) => 객체,개체,object
//function 틀() {} => new 틀()

//생성자 함수

// function A() {}

// const a = new A();
// console.log(a, typeof a);
// console.log(A()); //생성자 함수가 아니기 때문에 이 함수의 리턴값을 가져오게 되어 undefined값 출력

//생성하면서 데이터 넣기
// function B(name,age) {
//     console.log(name,age);
// }
// const b = new B(); //인자를 넣지 않기 때문에 undefined출력
// const c = new B('Hong',17); //값을 넣어 생성자 호출을 할시 값이 출력됨
// console.log(B());

//객체에 속성 추가하기 - Property

//값을 속성으로 넣기

// function A(){
//     this.name = 'Hong';
// }

// const a = new A(); //{name: 'Hong'}
// console.log(a);

//함수를 속성으로 넣기

// function B() {
//     this.hello = function() {
//         console.log('hello');
//     }
// }
// (new B().hello());

//new Function()
