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

const p = new Promise((resolve,reject) => {
    /* pending */
    setTimeout(() => {
        resolve(); /* fulfiled */
    }, 1000);
})

p.then();