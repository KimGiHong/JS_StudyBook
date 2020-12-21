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