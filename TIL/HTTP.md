### HTTP란

Hyper Text Transfer Protocol로 서버와 클라이언트(서버와 서버)가 서로 데이터를 주고 받기 위해 사용되는 통신 규약을 말한다.

HTML 외에도 이미지, 비디오, JOSN 등을 주고 받을 수 있다.

클라이언트와 서버가 나뉜 이유는 각자 역할에 집중하기 위해서 이다.(관심사의 분리) 클라이언트는 복잡한 비지니스 로직을 다룰 필요없이 UI를 그리는데 집중하고 서버는 그 반대이다.

### HTTP의 특징

**무상태성**

대표적인 특징으로 HTTP는 무상태성이 있다.

때문에 클라이언트와 서버 사이에 상태를 유지하지 않는다.

→ 즉 서로가 서로의 상태를 모른다.

**장점:** 서버 확장성이 높음 (스케일 아웃)

**단점:** 클라이언트가 계속 추가 데이터를 전송해야함

**비연결성**

서버와 클라이언트가 서로 연결되어 있지 않다.

→ 네트워크를 단절시킨다.

**장점:** 연결이 유지된다면 계속해서 자원이 사용된다. 때문에 비연결을 한다면 서버의 자원을 효율적으로 사용할 수 있다.

**단점:** 매번 서버와 연결을 실행해야한다.(3-way handshake를 매 요청마다 해야한다) 이 때문에 많은 시간이 소요된다.

<img src="https://github.com/RanungPark/F-LAB/assets/104816866/8a64de41-9257-4c65-b07d-93270d523e21"  width="500" height="400"/>

**극복:** HTTP 지속 연결 클라이언트와 서버는 소켓 연결을 한 다음 필요한 자원을 요청하고 응답한다.

<img src="https://github.com/RanungPark/F-LAB/assets/104816866/f4e4312a-8834-4825-ad91-26701c4f9d95"  width="500" height="400"/>

**Stateless(무상태성):** 필요한 정보를 클라이언트가 가지고 있기 때문에 갖은 동작을 하는 서버에 요청을 보낸다면 어떠한 서버라도 상관이 없다. 때문에 확장을 진행할 때 스케일 아웃을 진행하며 트래픽 증가를 해결할 수 있다.

**Connectionless(비연결성):** 클라이언트가 서버에 요청을 하고 응답을 받으면 바로 TCP/IP 연결을 끊어 연결을 유지 하지 않는다. 이를 통해 서버는 자원을 효율적으로 관리할 수 있다.

→ Stateless는 클라이언트가 상태 정보를 HTTP에 실어 요청해야하는 것이며 Connectionless는 클라이언트와 서버간의 네트워크를 단절시킨다

**상태코드**

| 1xx(정보 제공) | 클라이언트의 요청을 받았으며 작업을 계속 진행하고 있다.  |
| --- | --- |

| 2xx(성공) | 클라이언트가 요청한 동작을 수신하여 이해하였고 승낙하였으며 성공적으로 처리하였다. |
| --- | --- |
| 200(OK/ 성공) | 서버가 요청을 성공적으로 처리하였다. |
| 201(Created/ 생성됨) | 요청이 처리되어서 새로운 리소스가 생성되었다. |
| 202(Accepted/ 허용됨) | 요청은 접수하였지만, 처리가 완료되지 않았다. |

| 3xx(리다이렉션) | 클라이언트는 요청을 마치기 위해 추가 동작을 취해야 한다. |
| --- | --- |
| 301(Moved Permanently/ 영구이동) | 지정한 리소스가 새로운 URI로 이동하였다. |
| 303(See Other / 다른 위치 보기) | 다른 위치로 요청하라. |
| 307(Temporary Redirect/ 임시 리다이렉션) | 임시로 리다이렉션 요칭이 필요하다. |

| 4xx(클라이언트 오류) | 클라이언트에 오류가 있다. |
| --- | --- |
| 400(Bad Request/ 잘못된 요청) | 요청의 구문이 잘못되었다. |
| 401(Unauthorized/ 권한 없음) | 지정한 리소스에 대한 액세스 권한이 없다. |
| 403(Forbidden/ 금지됨) | 지정한 리소스에 대한 액세스가 금지되었다. |
| 404(Not Found/ 찾을 수 없음) | 지정한 리소스를 찾을 수 없다. |

| 5xx(서버 오류) | 클라이언트의 요청은 유효한데 서버가 처리에 실패하였다. |
| --- | --- |
| 500(Internal Server Error/ 내부 서버 오류) | 서버에 에러가 발생하였다. |
| 501(Not Implemented/ 구현되지 않음) | 요청한 URI 의 메소드에 대해 서버가 구현하고 있지 않다. |
| 502(Bad Gateway/ 불량 게이트웨이) | 게이트웨이 또는 프록시 역할을 하는 서버가 그 뒷단의 서버로부터 잘못된 응답을 받았다. |

**메시지**

Request Header: 클라이언트가 서버에 보내는 HTTP 메시지 이력

Response Header: 서버가 클라이언트에 응답하는 HTTP 메시지 이력

<img src="https://github.com/RanungPark/F-LAB/assets/104816866/a4a71823-5bbd-4aa1-a4df-0cb23df7f529"  width="500" height="400"/>

<img src="https://github.com/RanungPark/F-LAB/assets/104816866/31022059-0034-4f0b-ab66-50bdb76fdf76"  width="500" height="400"/>