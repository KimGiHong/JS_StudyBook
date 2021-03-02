//자료형 Data Types

//동적 타이핑
//let whatever = 'Mark'; //문자형

//whatever = 37; //숫자형

//whatever = true; //boolean형

//변수가 가지는 고정타입이 없다. 하지만 타입이 없는 것은 아니다

//데이터 타입

//기본타입 : Boolean , Null , Undefined , Number , String , Symbol
//객체 (Object)

//Boolean

// const isTrue = true;
// const isFalse = false;

// console.log(isTrue , typeof isTrue);
// console.log(isFalse , typeof isFalse);

// const a = new Boolean(false);

// console.log(a,typeof a); //Boolean이라는 변수는 false라는 값을 가지고있고 데이터타입은 object이다.

// if(a){
//     console.log('false?');
// }

// const b = Boolean(false);

// console.log(b,typeof b);

// if(b) {
//     console.log('false?'); //출력되지 않음
// }

// NUll

//  const a= null;

//  console.log(a, typeof a); //null이라는 값이 나오고 데이터 타입은 object가 된다.

//undefined 값이 정확히 정해지지 않았다.

// let b;

// console.log(b , typeof b);

// b = undefined;

// console.log(b , typeof b);

// if(a == b) {
//     console.log(a == b); //==은 둘의 값만 비교함으로 true값 출력
// }

// if(a === b) {
//     console.log(a === b); //===은 값뿐만 아니라 타입까지 비교함으로 false출력
// }

//Number

// const a = 37;

// console.log(a , typeof a);

// const b = 96.7;

// console.log(b , typeof b);

// const c = NaN;

// console.log(c , typeof c);

// const d = Number('Mark'); //숫자가 아니라는 것인 NaN값 출력

// console.log(d , typeof d);

// const e = Number('37');

// console.log(e , typeof e);

//String

// const a = 'Mark';

// console.log(a , typeof a);

// const b = "Mark" + ' Hong';

// const c = a + "Hong";

// console.log(b,c,typeof b,typeof c);

// const d = `${a} Hong`;  //자바스크립트의 표현식을 이용하여 추가 가능 

// console.log(d, typeof d);

//Symbol 고유한 값을 갖게하는 데이터타입

// const a = Symbol();
// const b = Symbol(37);
// const c = Symbol('Mark');
// const d = Symbol('Mark');

// console.log(a, typeof a);
// console.log(c === d);

//new Symbol(); //생성자 함수로 사용 불가!!

//나의 객체를 만들 수 있게하고 이미 있는 객체를 이용할줄 알아라!