### **자바스크립트에서 프로미스를 사용하여 비동기 처리를 하는 과정을 설명하고, 프로미스 체이닝과 에러 핸들링에 대해 설명해주세요.**

- 프로미스는 비동기 처리를 위한 상태를 반환한다
- 프로미스에서 비동기 처리가 성공되었다면 Fulfilled상태와 resolve객체로 성공했을 때의 값을 객체로 반환한다.
- .then을 통해 성공했을 때의 값을 받을 수 있다.
- .then또한 리턴값으로 프로미스를 반환한다.
- 그 리턴값 프로미스를 또 다시 .then으로 받을 수 있다. 이렇게 다음 then에서 이전 단계의 결과를 사용할 수 있는 것을 프로미스 체이닝 이라고 한다.
- 프로미스에서 비동기 처리를 실패되었다면 Rejected상태와 rejec메서드로 실패했을 때의 값을 객체로 반환한다.
- 이를 .then메서드의 두번째 인자로 받을 수도 있고 .catch메서드로 받을 수 있다 catch메서드는 then(undefined,에러처리 함수)와 같은 동작을 한다.

### 프로미스와 async/await의 차이점은 무엇인가요?

- 프로미스
    - 프로미스는 비동기 처리의 상태를 객체를 생성하고 후속 처리 메서드를 통해 비동기 작업의 결과를 처리한다.
    - 프로미스는 오류 처리를 catch를 통해 오류처리를 진행한다.
- async/await
    - async/await은 비동기 코드를 동기식으로 작성할 수 있게 도와주는 함수이다.
    - try…catch문으로 오류처리가 가능하다.

### 프로미스를 사용할 때 발생할 수 있는 문제점은 무엇이며, 이를 어떻게 해결할 수 있나요?

- .then체이닝 또한 콜백 헬 처럼 연속적으로 작성된다면 가독성이 좋지 않을 수 도 있다.

### 프로미스의 상태(상태)가 변화하는 과정을 설명해주세요.

- 프로미스가 생성되고 비동기 처리가 완료되기 전에 Pending이라는 상태를 가지고있는다.
- 비동기 처리가 성공적으로 완료되었다면 Fulfilled 상태를 가지게 되며 resolve 함수가 호출되어 결과값을 반환한다.
- 비동기 처리를 실패 한다면 Rejected 상태를 가지게 되며 reject함수가 호출되어 에러값을 반환한다.

### 프로미스를 사용한 복잡한 비동기 코드를 리팩토링하는 전략은 무엇인가요?

- async/await를 사용하여 비동기 코드를 동기식으로 작성할 수 있다.

### 프로미스를 사용하여 HTTP 요청을 처리하는 예제 코드를 작성해주세요.

```jsx
fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error(error))
```

```jsx
function fetchGetData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('네트워크 오류 발생');
        }

        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  })
}

const userGetData = fetchGetData('url')

userGetData
  .then(userData => {
    console.log('사용자 데이터:', userData);
  })
  .catch(error => {
    console.error('에러 발생:', error);
  })
```

```jsx
async function asyncGetFetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('네트워크 오류 발생');
    }

    const data = await response.json();

    return data
  } catch (error) {
    console.error('에러 발생:', error);

    return undefined;
  }
}

async function getUserData() {
  const url = 'url';
  const userData = await asyncGetFetchData(url);
  
  if(userData !== undefined) {
    console.log('사용자 데이터:', userData);
  }
}

getUserData()
```

### **자바스크립트의 프로토타입 상속 메커니즘을 설명하고, 프로토타입 체인을 통한 속성 접근 방식에 대해 설명해주세요.**

- 프로토타입 상속 메커니즘
    1. 객체와 프로토타입 간의 링크
    2. 상속과 프로토타입 체인
    3. __proto__속성
- 프로토타입 체인을 통한 속성 접근 방식
    1. 인스턴스의 프로퍼티를 확인한다
    2. 존재하지 않는다면 프로토타입 체인을 따라 올라가 상위 프로토타입의 프로퍼티를 확인한다
    3. 이렇게 하여 발견하지 못한다면 Object.prototype(Object.creat로 만들어지는 등 최종이 Object.prototype이 아니라면 경우 최종 프로토타입까지)까지 검색한다.
    4. 여기서도 발견하지 못하면 undefined를 반환한다

### 프로토타입과 클래스 기반 상속의 차이점은 무엇인가요?

- 객체는 프로토타입 객체를 참조하며 프로토타입 객체는 속성과 메서드를 정의한다.
    - 하위 객체는 상위 객체의 프로토타입을 참조하여 속성과 메서드를 상속받는다.
- 클래스는 속와 메서드를 정의하는 템프릿 역할을 한다.
    - 하위 클래스는 상위 클래스를 확장하여 속성과 메서드를 상속받는다.

### 프로토타입을 사용하여 객체를 확장하는 방법에는 어떤 것들이 있나요?

- 프로토타입은 동적으로 속성을 추가하거나 제거할 수 있다.
- ES6의 클래스로 extend를 사용하여 확장 할 수 있다.
- Object.create()를 통해 객체리터럴을 확장 할 수 있다.
- 생성자 함수를 이용하여 확장할 수 있다.

### 프로토타입 체인에서 발생할 수 있는 문제점은 무엇이며, 이를 어떻게 해결할 수 있나요?

- 프로토타입 체인이 깊고 복잡하다면 찾는데 성능에 영향을 미칠 수 있다
    - 프로토타입을 단순화하거나 필요시 객체를 병합하여 프로토타입 체인의 깊이를 줄인다
- 객체가 의도하지 않은 상속을 받을 수 있다
    - 프로토타입 체인을 변경할 때 주의를 하고 검토한다.

### 자바스크립트에서 프로토타입을 사용한 코드 예제를 작성해주세요.

```jsx
function User(name, age) {
	this.name = name;
	this.age = age;
}

User.prototype.getInfo = function () {
	console.log(`안녕하세요~ 저는 ${this.name}이고 ${this.age}살 입니다`);
};

const user1 = new User('철수', 15);
const user2 = new User('영희', 18);

user2.getInfo = function() {
	user2.__proto__.getInfo.call(user2)
	console.log(`저는 여성입니다`) 
}

user1.getInfo();
user2.getInfo();
```

### 프로토타입을 사용하여 메모리 사용을 최적화하는 방법은 무엇인가요?

- 공통된 프로퍼티와 메서드를 프로토타입에 정의한다.
- 객체 속성을 동적으로 추가할 때 프로토타입 체인을 통해 다른 객체에 영향을 줄 수 있다. 이를 해결하기 위해 Object.create() 사용을 고려해야한다.