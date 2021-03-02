//  //블럭
//  {
//      //
//      const name = 'Mark';
//      console.log(name);
//  }

//  //밖에서 안으로

//  let age = 37;

//  {
//      age++;
//      console.log(age);
//  }
//  console.log(age);

//  // 중첩

//  {
//      {
//          {
//             console.log(age);
//          }
//      }
//  }

//var 함수 스코프

// var a = 0;
// (function() {
//     a++;
//     console.log(a);
// })();
// console.log(a);

// (function() {
//     var b = 0;
//     console.log(b);
// })();

// b++; 에러 : 함수 안에서 변수생성시 함수밖에서 변수사용 X
// console.log(b);

//블록 스코프  var보다는 let과 const를 사용해라

// var c = 0;

// {
//     c++;
//     console.log(c);
// }
// {
//     var d = 0;
//     console.log(d);
// }
// console.log(d);

//함수 먼저
// function hello(){
//     console.log('Hello');
// }
// hello();

//함수의 호출을 먼저
// hello2();

// function hello2(){
//     console.log("Hello2");
// }

//Hoisting 선언을 하지않고 코드를 먼저 쳐도 정상적으로 출력됨
// age = 6;
// age++;
// console.log(age);

// var age;

//var 키워드를 사용했을때 생기는 문제점

// console.log(name); //undefined 

// name = 'Mark';

// console.log(name); //Hoisting

// var name;

//let 또는 const를 사용했을때 Hoisting 문제가 사라짐
//let name;

//console.log(name); //undefined

//name = 'Mark';

//console.log(name); //Mark

//let name;

