/*
ES6 부터 자바스크립트의 표준 내장 객체로 추가됨
*/

// console.log(Promise);

// new Promise(/* executor */);

/*
executor 함수는 resolve와 reject를 인자로 가집니다.
    (resolve,resject) => {...}
resolve 와 reject는 함수입니다.
    resolve(), reject()
*/

// new Promise(/* executor */(resolve,reject) => {});

/*
생성자를 토애서 프로미스 객체를 만드는 순간 pending (대기) 상태라고 합니다.
*/

/*
executor 함수 인자 중 하나인 resolve 함수를 실행하며느 fulfilled(이행) 상태가 됩니다.
*/

/*
executor 함수 인자 중 하나인 reject 함수를 실행하면, reject(거부) 상태가 됩니다.
*/

// new Promise((resolve,reject) => {
//     reject(); //거부상태
// })

/*
p 라는 프로미스 객체는 1000ms 후에 fulfilled 상태가 됩ㄴ다.
*/

// new Promise((resolve,reject) => {
//     /* pending */
//     setTimeout(() => {
//         resolve(); /* fulfiled */
//     }, 1000);
// })

/*
p 라는 프로미스 객체가 fulfilled 되는 시점에 p.then 안에 설정한 callback 함수가 실행됩니다.
*/

// const p = new Promise((resolve,reject) => {
//     /* pending */
//     setTimeout(() => {
//         resolve(); /* fulfiled */
//     }, 1000);
// })

// p.then();

/*
p.then으로 callback 함수를 설정했기 때문에 fulfilled 되면서 callback이 실행됩니다.
*/

// const p = new Promise((resolve,reject) => {
//     /* pending */
//     setTimeout(() => {
//         resolve(); /* fulfiled */
//     }, 1000);
// })

// p.then(() => {
//     console.log('1000ms 후에 fulfilled 됩니다.');
// });

/*
then을 설정하는 시점을 정확히하고,
함수의 실행과 동시에 프로미스 객체를 만들면서 pending이 시작하도록 하기 위해
프로미스 객체르르 생성하면서 리턴하는 함수 (p)를 만들어 함수 (p) 실행과 동시에 then을 생성
 */

// function p() {
//      return new Promise((resolve,reject) => {
//         /* pending */
//         setTimeout(() => {
//             resolve(); /* fulfiled */
//         }, 1000);
//     })
//  }
//  p().then(() => {
//     console.log('1000ms 후에 fulfilled 됩니다.');
//  });

/*
마찬가지로 프로미스 객체가 rejected 되는 시점에 p,catch 안에 설정한 callback 함수가 실행됩니다,
*/

// function p() {
//      return new Promise((resolve,reject) => {
//         /* pending */
//         setTimeout(() => {
//             reject(); /* rejected */
//         }, 1000);
//     })
//  }

// p().then(() => {
//     console.log('1000ms 후에 fulfilled 됩니다.');
//  }).catch(() => {
//     console.log('1000ms 후에 rejected 됩니다.');
//  });

/*
executor 의 resolve 함수를 실행할때 인자를 넣어 실행하면, then의 callback 함수의 인자로 받을 수 있습니다.
    resolve('hello');
    then((message) => {...})
*/

// function p() {
//      return new Promise((resolve,reject) => {
//         /* pending */
//         setTimeout(() => {
//             resolve('hello'); /* rejected */
//         }, 1000);
//     })
//  }

// p().then((message) => {
//     console.log('1000ms 후에 fulfilled 됩니다.',message);
//  }).catch(() => {
//     console.log('1000ms 후에 rejected 됩니다.');
//  });

/*
마찬가지로, executor의 reject 함수를 실행할때 인자를 넣어 실행하면, catch의 callback 함수의 인자로 받을 수 있다.
    reject('error');
    then((reson) => {...})
*/

// function p() {
//      return new Promise((resolve,reject) => {
//         /* pending */
//         setTimeout(() => {
//             reject('error'); /* rejected */
//         }, 1000);
//     })
//  }

// p().then((message) => {
//     console.log('1000ms 후에 fulfilled 됩니다.',message);
//  }).catch((reason) => {
//     console.log('1000ms 후에 rejected 됩니다.',reason);
//  });

/* 
보통 reject 함수를 실행하며 rejected 되는 이유를 넘기는데, 표준 내장 객체인 Error의 생성자를 이용하여 Error 객체를 만들 수 있다.
*/

// function p() {
//     return new Promise((resolve,reject) => {
//        /* pending */
//        setTimeout(() => {
//            reject(new Error('bad')); /* rejected */
//        }, 1000);
//    })
// }

// p().then((message) => {
//    console.log('1000ms 후에 fulfilled 됩니다.',message);
// }).catch((error) => {
//    console.log('1000ms 후에 rejected 됩니다.',error);
// });