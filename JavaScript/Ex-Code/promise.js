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

/*
fulfilled 도기ㅓ나 rejected 된 후에 최종적으로 실행할 것이 있다면, .finally()를 설정하고,함수로 인자로 넣습니다.
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
// })
// .finally(() => {
//     console.log('end');
// });

/*
보통 비동기 작업을 할 때, callback함수를 인자로 넣어 로직이 끝나면 callback 함수를 호출합니다.
이런 경우 함수가 아래로 진행되지 않고, callback 함수 안으로 진행됩니다.
*/

// function c(callback) {
//     setTimeout(() => {
//         callback();
//     }, 1000);
// }

// c(() => {
//     console.log('1000ms 후에 callback 함수가 실행됩니다.');
// });
// c(() => {
//     c(() => {
//         c(() => {
//             console.log('1000ms 후에 callback 함수가 실행됩니다.');
//         })
//     })
// }); // c 라는 함수를 3번 호출하였으니 3초후에 callback함수 살행

/*
then 함수에서 다시 프로미스 객체를 리턴하는 방법을 통해 체이닝하면, 비동기 작업을 순차적으로 아래로 표현할 수 있습니다.
then에 함수를 넣는 여러 방법을 확인해봅시다.
*/

// function p() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 1000);
//     });
// }

// p().then(() => {
//     return p();
// })
// .then(() => p())
// .then(p)
// .then(() => {
//     console.log('4000ms 후에 fulfilled 됩니다.');
// });

/*
value가 프로미스 객체인지 아닌지 알 수 없는 경우, 사용하면 연결된 then 메서드를 실행합니다.
    value가 프로미스 객체면,resolve 된 then 메서드를 실행합니다.
    value가 프로미스 객체가 아니면, value를 인자로 보내면서 then 메서드를 실행합니다.
*/

// Promise.resolve(/* value */);

// Promise.resolve(new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//     }, 1000);
// })).then((data) => {
//     console.log('프로미스 객체인 경우, resolve 된 결과를 받아 then이 실행 된다.', data);
// });

// Promise.resolve('bar').then(data => {
//     console.log('then 메서드가 없는 경우, fulfilled 됩니다.',data);
// });

/*
Promise.rejcet 를 사용하면 , catch 로 연결된 rejected 상태로 변경됩니다.
*/

// Promise.reject(/* value */);
// Promise.reject(new Error('reason'))
//     .then(error => {})
//     .catch(error => {
//         console.log(error);
//     });

/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.all을 실행하면,
배열의 모든 프로미스 객체들이 fulfilled 되었을 때, then 의 함수가 실행됩니다.
then의 함수의 인자로 프로미스 객체들의 resolve 인자값을 배열로 돌려줍니다.
*/

//Promise.all([프로미스객체들]);

// function p(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// Promise.all([p(1000), p(2000), p(3000)]).then(messages => {
//     console.log('모두 fulfilled 된 이후에 실행됩니다.',messages);
// });

/*
프로미스 객체 여러개를 생성하여,
배열로 만들어 인자로 넣고 Promise.rece를 실행하면,
배열의 모든 프로미스 객체들 중 가장 먼저 fulfilled 된 것으로, then 의 함수가 실행됩니다.
then의 함수의 인자로 가장 먼저 fulfilled 된 프로미스 객체의 resolve 인자값을 배열로 돌려줍니다.
*/

//Promise.race([프로미스객체들]);

// function p(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(ms);
//         }, ms);
//     });
// }

// Promise.race([p(1000), p(2000), p(3000)]).then(message => {
//     console.log('가장 빠른 하나가 fulfilled 된 이후에 실행됩니다.',message);
// });