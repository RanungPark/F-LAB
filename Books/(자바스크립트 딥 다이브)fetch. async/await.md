## 프로미스를 반환하는 함수들

### fetch

- fetch함수는 HTTP 응답을 나타내는 Response 객체를 래핑한 Promise 객체를 반환한다.
- json 메서드를 이용하여 Response 객체를 역직렬화한다.
- fetch함수가 반환하는 프로미스는 HTTP에러는 발생해도 에러를 reject하지 않는다.
- 오프라인등 네트워크 장애나 CORS 에러에 의한 요청이 완료되지 못한 경우에만 reject한다.

### async/await

- 프로미스의 후속 처리 메서드 없이 마치 동기처럼 프로미스가 처리결과를 반환하도록 구현할 수 있게 해준다.
- async는 언제나 프로미스를 반환한다.
- await는 async함수 안에 작성해야한다
  - 프로미스가 settled상태가 될 때가지 대기하다 settled상태가 된다면 resolve한 처리 결과를 반환한다.
- async는 try…catch문으로 에러를 처리할 수 이다.
  - catch문으로 에러를 잡지 않는다면 reject하는 프로미스를 반환한다.
