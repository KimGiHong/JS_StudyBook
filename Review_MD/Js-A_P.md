# 자바스크립트에서의 비동기 처리를 다루어보자

`여기서부터는 보는 것만으로 이해가 안될 수 있으니 직접 코딩해보도록 하자`

# 목차

1. [동기,비동기의 정의 및 이해](#동기와-비동기의-정의)
1. [Promise](#promise)
1. [async/await](#async-await)

## 동기와 비동기의 정의

자바스크립트를 배우다 보면 비동기에 대해 들어보았을 것이다. 도대체 뭘까?

* 동기 (synchronous : 동시에 일어나는)
    * 동기는 말 그대로 동시에 일어난다는 뜻입니다. 요청과 그 결과가 동시에 일어난다는 약속인데요. 바로 요청을 하면 시간이 얼마가 걸리던지 요청한 자리에서 결과가 주어져야 합니다.
* 비동기 (Asynchronous : 동시에 일어나지 않는)
    * 비동기는 동시에 일어나지 않는다를 의미합니다. 요청과 결과가 동시에 일어나지 않을거라는 약속입니다.

`동기`와 `비동기`는 상황에 따라서 각각의 장단점이 있다.

`동기방식`은 설계가 매우 간단하고 직관적이지만 결과가 주어질 때까지 아무것도 못하고 대기해야 하는 단점이 있고, 

`비동기방식`은 웹페이지를 리로드하지 않고 데이터를 불러오는 방식이다. 이 방식의 장점은 페이지 리로드의 경우 전체 리소스를 다시 불러와야하는데 이미지, 스크립트 , 기타 코드등을 모두 재요청할 경우 불필요한 리소스 낭비가 발생하게 되지만 비동기식 방식을 이용할 경우 필요한 부분만 불러와 사용할 수 있으므로 매우 큰 장점이 있다.

[📜목차보기](#목차)

### 본격적으로 비동기 처리를 코드를 보고 이해해 보도록하자.

EX )
```javascript
function work() {
  const start = Date.now();
  for (let i = 0; i < 10000; i++) {}
  const end = Date.now();
  console.log(end - start + 'ms');
}

work();
console.log('다음 작업');
```

여기서 `Date.now` 는 현재 시간을 숫자 형태로 가져오는 자바스크립트 내장 함수이다. 위 work 함수는, 1,000,000,000 번 루프를 돌고, 이 작업이 얼마나 걸렸는지 알려준다.

지금은 work() 함수가 호출되면, for 문이 돌아갈 때는 다른 작업은 처리하지 않고 온전히 for 문만 실행하고 있다.

만약 이 작업이 진행되는 동안 다른 작업도 하고 싶다면 함수를 비동기 형태로 전환을 해주어야하는데, 그렇게 하기 위해서는 `setTimeout` 이라는 함수를 사용해주어야한다.

```javascript
function work(callback) {
  setTimeout(() => {
  const start = Date.now();
  for (let i = 0; i < 10000; i++) {}
  const end = Date.now();
  callback(end - start + 'ms');
  }, 0);
}

console.log('작업 시작!');
work((endTime) => {
  console.log(endTime);
  console.log('작업이 끝났어요');
});
console.log('다음 작업')
```

`setTimeout` 함수는 첫번째 파라미터에 넣는 함수를 두번째 파라미터에 넣은 시간(ms 단위)이 흐른 후 호출해준다. 지금은 두번째 파라미터에 0을 넣었다. 따라서, 이 함수는 바로 실행이 된다. 0ms 이후에 실행한다는 의미이지만 실제로는 4ms 이후에 실행된다. 이렇게 `setTimeout` 을 사용하면 우리가 정한 작업이 백그라운드에서 수행되기 때문에 기존의 코드 흐름을 막지 않고 동시에 다른 작업들을 진행 할 수 있다.

결과는 
`작업 시작!`,`다음 작업`,`508ms`라는 값이 나오게 된다.

결과물을 보면, 작업이 시작 되고 나서, for 루프가 돌아가는 동안 다음 작업도 실행되고, for 루프가 끝나고 나서 몇 ms 걸렸는지 나타나고 있다.

그렇다면, 만약에 work 함수가 끝난 다음에 어떤 작업을 처리하고 싶다면 어떻게 해야 할까. 

이럴 땐, `콜백 함수`를 파라미터로 전달해주면 된다.
>콜백 함수란..
: 함수 타입의 값을 파라미터로 넘겨줘서, 파라미터로 받은 함수를 특정 작업이 끝나고 호출을 해주는 것을 의미합니다.

<br>
추가적으로, 아래 다음과 같은 작업들은 주로 비동기적으로 처리하게 된다.

* Ajax Web API 요청: 만약 서버쪽에서 데이터를 받와아야 할 때는, 요청을 하고 서버에서 응답을 할 때 까지 대기를 해야 되기 때문에 작업을 비동기적으로 처리합니다.
* 파일 읽기: 주로 서버 쪽에서 파일을 읽어야 하는 상황에는 비동기적으로 처리합니다.
* 암호화/복호화: 암호화/복호화를 할 때에도 바로 처리가 되지 않고, 시간이 어느정도 걸리는 경우가 있기 때문에 비동기적으로 처리합니다.
* 작업 예약: 단순히 어떤 작업을 몇초 후에 스케쥴링 해야 하는 상황에는, setTimeout 을 사용하여 비동기적으로 처리합니다.

비동기 작업을 다룰 때에는 callback 함수 외에도 Promise, 그리고 async/await 라는 문법을 사용하여 처리 할 수 있다.아래에서 알아보도록하자.

[📜목차보기](#목차)

## Promise

프로미스는 비동기 작업을 조금 더 편하게 처리 할 수 있도록 ES6 에 도입된 기능이다. 
이전에는 비동기 작업을 처리 할 때에는 콜백 함수로 처리를 해야 했었는데,
콜백 함수로 처리를 하게 된다면 비동기 작업이 많아질 경우 코드가 쉽게 난잡해지게 되었다고 한다.

숫자 n 을 파라미터로 받아와서 다섯번에 걸쳐 1초마다 1씩 더해서 출력하는 작업을 setTimeout 으로 구현해보도록 하겠다.

```javascript
function increaseAndPrint(n, callback) {
  setTimeout(() => {
    const increased = n + 1;
    console.log(increased);
    if (callback) {
      callback(increased);
    }
  }, 1000);
}

increaseAndPrint(0, n => {
  increaseAndPrint(n, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          console.log('끝');
        });
      });
    });
  });
});
```

코드 읽기가 많이 많이 매우 복잡하다. 이런 식의 코드를 콜백지옥이라고 불린다.

비동기적으로 처리해야 하는 일이 많아질수록, 코드의 깊이가 계속 깊어지는 현상이 있는데, 
Promise 를 사용하면 이렇게 코드의 깊이가 깊어지는 현상을 방지 할 수 있다.

[📜목차보기](#목차)

## Promise를 만들어보자

```javascript
const myPromise = new Promise((resolve, reject) => {
  // 구현..
})
```

Promise 는 성공 할 수도 있고, 실패 할 수도 있다. 성공 할 때에는 resolve 를 호출해주면 되고, 실패할 때에는 reject 를 호출해주면 된다. 여기서는 1초 뒤에 성공시키는 상황에 대해서만 구현을 해보도록하자.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

myPromise.then(n => {
  console.log(n);
});
```

resolve 를 호출 할 때 특정 값을 파라미터로 넣어주면, 이 값을 작업이 끝나고 나서 사용 할 수 있다. 
작업이 끝나고 나서 또 다른 작업을 해야 할 때에는 Promise 뒤에 `.then(...)` 을 붙여서 사용하면 된다.

이번에는, 1초뒤에 실패되게끔 해보자.

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error());
  }, 1000);
});

myPromise
  .then(n => {
    console.log(n);
  })
  .catch(error => {
    console.log(error);
  });
```

실패하는 상황에서는 `reject` 를 사용하고, `.catch` 를 통하여 실패했을시 수행 할 작업을 설정 할 수 있다.

이제, Promise 를 만드는 함수를 작성해보자.

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0).then((n) => {
  console.log('result: ', n);
})
```

여기까지만 보면, 그냥 함수를 전달하는건데, 뭐가 다르지 싶을수도 있을 것이다. 하지만, Promise 의 속성 중에는, 만약 then 내부에 넣은 함수에서 또 Promise 를 리턴하게 된다면, 연달아서 사용 할 수 있다.

Like This

```javascript
function increaseAndPrint(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

increaseAndPrint(0)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .then(increaseAndPrint)
  .catch(e => {
    console.error(e);
  });
```

Promise 를 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가 깊어지지 않게 된다.

하지만, 이것도 불편한점이 있긴 하다. 에러를 잡을 때 몇번째에서 발생했는지 알아내기도 어렵고 특정 조건에 따라 분기를 나누는 작업도 어렵고, 특정 값을 공유해가면서 작업을 처리하기도 까다롭다. 그래서 async/await 을 사용한다, async/await를 사용한다면 이러한 문제점을 깔끔하게 해결 가능하다.

[📜목차보기](#목차)

## async await

* async/await 문법은 ES8에 해당하는 문법으로,
위에서 설명했듯이 Promise 를 더욱 쉽게 사용 할 수 있게 해준다.

사용법부터 알아보자.
```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다');
}

process();
```

async/await 문법을 사용할 때에는, 함수를 선언 할 때 함수의 앞부분에 `async` 키워드를 붙이도록 하자. 그리고 Promise 의 앞부분에 await 을 넣어주면 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행 할 수 있을 것이다.

위 코드에서는 sleep 이라는 함수를 만들어서 파라미터로 넣어준 시간 만큼 기다리는 Promise 를 만들고, 이를 process 함수에서 사용해주었었다.

함수에서 async 를 사용하면, 해당 함수는 결과값으로 Promise 를 반환하게 된다. 

따라서 아래와 같은 코드를 작성할 수 있을 것이다.

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다');
}

process().then(() => {
  console.log('작업 끝');
});
```

`async` 함수에서 에러를 발생 시킬때에는 `throw` 를 사용하고, 에러를 잡아낼 때에는 try/catch 문을 사용한다.

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}

async function process() {
  try {
    await makeError();
  } catch (e) {
    console.error(e);
  }
}

process();
```

## 더욱 자세한건 공식 자료 또는 구글링을 하여 알아보면 될 것 같다!
[📜목차보기](#목차) 
