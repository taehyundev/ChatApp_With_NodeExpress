# chat App 개발

* dependencies
    - soket.io 사용
    (npm install --save soket.io)

* 사용한 개념
    - 화살표 함수
    (a,b) => a+b; 람다식과 비슷하게 함수를 간단한 형태로 표기


### 참고 사이트
>> https://socket.io/get-started/chat/

### What is the meaning of the event?
이벤트는 웹 소켓을 사용하는 '단위'라고 생각하면 된다. 클러이언트와 서버에서 이벤트 단위로 각 작업을 매칭하게 된다.

* connection : 클라이언트가 연결할 때 발생하며, socket 객체를 생성한다.
* disconnect : 클라이언트가 연결을 해제할 때 발생
* 그 외 : 변수 선언을 하듯 필요에 따라 직접 생성해서 사용한다.