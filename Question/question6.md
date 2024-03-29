### **브라우저 렌더링 과정을 상세히 설명하고, 이 과정에서 성능을 최적화할 수 있는 방법을 제시해주세요.**

- 브라우저 엔진에서 HTML파일을 파싱한다.
- 파싱도중 link태그를 만난다면 CSS파일을 파싱하고 HTML 파싱을 잠시 멈춘다
- CSS파일을 파싱하여 CSSOM트리를 만들었다면 다시 HTML 파일을 파싱한다.
- HTML 파싱으로 생성된 DOM트리와 CSSOM트리를 합쳐 렌더트리를 만든다.
- HTML파싱 도중(body 종료태그 위에서) script를 만난다면 자바스크립트 파일을 브라우저 엔진이 아닌 자바스크립트 파일로 파싱한다.
- 자바스크립트를 바이트코드로 변환하여 읽어들여 렌더 트리에 적용한다
- 이때 사이즈 조절 등 변화를 이르키는 리플로우를 진행한다.
- 리플로우 되었다면 리패인트를 통해 다시 화면에 띄운다.(리플로우될 게 없다면 리페인트만 진행될 수도 있음)
- script태크를 body중간에 놓는다면 생성되지 못한 DOM을 리플로우할 수 있어 오류가 발생할 수 도있다. 때문에 body 종료태그 바로 위에 작성하는 것이 좋다.

### DOM 트리와 CSSOM 트리가 렌더 트리로 합쳐지는 과정을 설명해주세요.

- HTML 파일을 파싱하여 DOM트리를 구축한다.
- CSS파일을 파싱하여 CSSOM트리를 구축한다.
- DOM트리의 루트에서 시작하여 화면에 표시되는 노드 각각 탐색한다.
- 화면에 표시되지 않는 일부 노드들은 렌더 트리에 반영하지 않는다.
- CSS에 의해 화면에 숨겨지는 노드들은 렌더 트리에 반영되지 않는다.
- 화면에 표시되는 각 노드에 대해 적절하게 일치하는 CSSOM 규칙을 찾아 적용한다
- 화면에 표시되는 노드를 콘텐츠 및 계산된 스타일과 함께 내보낸다

### 레이아웃(reflow)과 페인트(repaint) 과정에서 성능을 최적화하는 방법은 무엇인가요?

**리플로우(Reflow/Layout)**

- 리플로우는 화면 구조가 변경될 때, 뷰포트 내에 렌더 트리의 노드의 정확한 위치와 크기를 계산하는 과정이다.
    - 최적화
    1. 스타일을 변경할 경우 가장 하위 노드의 클래스를 변경한다.
    2. 인라인 스타일을 사용하지 않는다.
    3. 애니메이션이 있는 노드는 `position`을 `fixed` 또는 `absolute`로 지정한다.
    4. 퀄리티, 퍼포먼스의 타협점을 찾는다.
    5. `<table>` 레이아웃을 피한다.
    6. IE의 CSS 표현식을 사용하지 않는다.
    7. CSS 하위 선택자를 최소화한다.
    8. 숨겨진 노드의 스타일을 변경한다.
    9. 클래스를 혹은 `cssText` 사용하여 한 번에 스타일을 변경한다.
    10. DOM 사용을 최소화한다.
    11. 캐시를 활용한다.

**리페인트(Repaint/Redraw)**

- 리페인트란 화면에 변화가 있을 때 화면을 그리는 과정이다
- 화면의 구조가 변경될 때는 리플로우 과정을 거쳐 화면 구조를 다시 계산후 리페인트를 진행하는데 화면 구조 변화가 없다면 리페인트만 진행된다.
    - 최적화
    1. 화면 변경을 최소화 하기….

### 크리티컬 렌더링 패스는 무엇이며, 이를 최적화하는 방법은 무엇인가요?

- 크리티컬 렌더링 패스는 브라우저가 페이지의 초기 출력을 위해 실행해야 하는 순서를 의미한다
    1. DOM 트리 구축
    2. CSSOM 트리 구축
    3. JavaScript 실행
    4. 렌더 트리 구축
    5. 레이아웃 생성
    6. 페인팅
- 크리티컬 렌더링 패스의 성능을 최적화 한다는 것은 초기 화면을 빠르게 출력한다는 것을 의미한다
1. CSS는 렌더링 차단 리소스이기 때문에 최초 렌더링에 걸리는 시간을 최적화 하려면 CSS를 간단하게 만들고 클라이언에 최대한 빠르게 다운되게 하여야한다.
    1. 미디어 유형과 미디어 쿼리를 사용하면 일부 CSS 리소스를 렌더링 비차단 리소스로 표시할 수 있다
2. 자바스크립트는 파서 차단 리소스이다. 때문에 DOM생성을 차단하고 페이지 렌더링을 지연시키게 된다.
    1. 최적화하기 위해서 자바스크립트를 비동기로 설정하고 불필요한 자바스크립트를 제거해야 한다.
    2. script 태그의 뒷부분에서 정의된 어떠한 태그들은 아직 생성되지 않았기 때문에 노드를 찾을 수 없으며 DOM생성을 차단한다. 때문에 body 태그 닫기 직전에 script 태그를 선언하는 것이 좋다.
    3. 비동기 자바스크립트인 async나 defer을 이용하여 파싱을 중단하지 않는다.
3. 리소스 우선순위 지정하기
4. Critical Rendering Path 측정하기

### 자바스크립트 실행이 브라우저 렌더링에 미치는 영향에 대해 설명해주세요.

- 자바스크립트는 파서 차단 리소스이다
- 브라우저는 HTML을 파싱하다가 자바스크립트를 만나면 진행하던 파싱을 중단한고 자바스크립트 리소스를 다운로드해 파싱하고 실행한다.
- sctipt만 사용한다면 기본적으로 스크립트를 가져와 실행이 끝나면 HTML파싱이 중단되어 화면에 출력되는 시간이 길어지며, DOM이 형성되지 않은 부분을 변화를 주는 코드가 있다면 예상치 못한 오류가 발생 할 수 있다.
1. body태그 위에 작성하는 방법으로 해결할 수 있다
2. async 속성을 사용하여 해결한다.
    1. async속성은 HTML파싱을 멈추지 않고 스크립트를 다운한다. 스크립트 리소스 다운이 완료되면 HTML 파싱을 중단하고 스크립트를 실행한다
3. defer 속성을 사용하여 해결한다.
    1. defer속성 또한 async와 마찬가지로 HTML파싱을 멈추지 않고 스크립트를 다운하지만 HTML파싱이 완료되면 스크립트가 실행된다.
- async는 HTML파일에 종속성이 없을 경우 사용하면 좋다.
- defer은 반대로 종속성이 있는 경우에 사용하면 좋다.

### 웹 페이지 로딩 성능을 개선하기 위한 리소스 로딩 전략은 무엇인가요?

- link 태그의 리소스 우선순위를 지정한다.
1. preload
    1. 현재 페이지에서 사용될 것이 확실한 리소스를 preload해야 한다. 브라우저는 현재 페이지에 필요한 리소스를 빠르게 가져오게 한다.
    2. as를 같이 사용하여 리소스 유형을 브라우저에 알려줘야한다. 올바른 유형을 설정하지 않는다면 브라우저는 해당 리소스를 사용하지 않는다.
    3. preload는 반드시 리소스를 가지고온다 이때 리소스를 중복 참조하여 중복된 개수만큼 리소스를 가져오기 때문에 리소스를 중복해서 참조하지 않아야한다.
    4. 즉 반드시 사용되어야하는 리소스에만 사용한다.
    - 폰트를 가지고 오거나 초기 렌더링에 반드시 필요한 리소스에 사용한다.
2. preconnet
    1. 현재 페이지에서 외부 도메인의 리소스를 참고하는 것을 브라우저에게 알려 미리 외부 도메인과 연결을 설정할 수 있게 한다.
    2. 브라우저가 빨리 닫힐 수 있는 페이지에는 preconnect를 사용하지 않는 것이 좋다.
    - 정확한 경로를 알 수 없을 때 연결을 미리 하여 연결에 필요한 시간을 절약할 수 있고 스트리밍 데이터를 처리할 때 사용한다.
3. prefetch
    1. 미래에 사용될 것이라고 예상되는 리소스들을 가져와 캐시에 저장한다.
    2. 재귀적으로 동작하지 않는다. 즉 HTML 리소스를 가져올 수 있지만 HTML에서 사용되는 CSS등의 리소스는 가져오지 않는다.
    3. Override목적으로 사용하지 않는다

### **함수형 프로그래밍에서 순수 함수의 정의와 중요성에 대해 설명하고, 사이드 이펙트를 피하는 방법을 제시해주세요.**

**정의**

- 순수 함수는 외부 상태를 변경하지 않고, 같은 입력에 대해 항상 같은 결과를 반환하여 예측이 가능하고 리팩토링이 수월하다.
- 외부의 상태에 의존하지 않기 때문에 어디에서든 대체할 수 있다.

**중요성**

- 순수 함수를 사용하면 예측이 가능하며 디버깅이 쉽다 또한 부작용이 없어 코드의 안전성을 높이고 오류를 줄일수 있다.
- 순수함수는 외부의 상태에 의존하지 않기 떄문에 독립적으로 테스트를 진행 할 수 있다

**사이트 이펙트**

- 불변한 데이터 구조를 사용하기
- 순수 함수를 사용하여 외부 상태를 변경하지 않기

### 순수 함수와 비순수 함수의 차이점은 무엇인가요?

- 순수함수란 참조 투명성과 사이드 이펙트가 없는 함수를 순수함수 라고 한다.
    - 참조 투명성은 같은 파라미터에 대해 언제나 같은 리턴값을 보장하는 것을 말한다.

즉 새로운 값을 반환한다.

- 비순수함수는 순수함수와 반대로 사이드 이펙트가 있으며 리턴값이 동일한 보장을 받지 못한다.

### 함수형 프로그래밍에서 고차 함수의 역할은 무엇인가요?

- 고차 함수를 사용하면 함수를 단위별로 조각내어 재사용성과 유지보수를 높일 수 있다.
- 커링을 이용하면 조합성을 높이고 부분 적용에 용이하다

### 불변성(Immutable)이 중요한 이유와 이를 지키는 방법은 무엇인가요?

**중요한 이유**

1. 예측이 가능하도록 동작하기 때문에 디버깅과 테스트에 용이하다.
2. 불변성을 지닌 데이터는 메모리에서 관리하기 수월하다. 변경 가능한 데이터는 수정될 때마다 메모리 할당하고 해제해야 하지만 불변 객체는 변경이 없으므로 할당과 해제가 필요하지 않다.
3. 변경할 수 없기 때문에 부작용이 발생할 가능성이 줄어든다.

**지키는 방법**

1. 얕은 복사와 깊은 복사를 사용하여 불변성을 유지한다.
2. 상태 변경 메서드의 사용을 제한하고 새로운 객체를 반환하는 메서드를 사용한다.
3. 변경이 불가능한 데이터 구조를 사용한다. map, set등

### 함수형 프로그래밍에서 사용되는 주요 디자인 패턴은 무엇인가요?

1. **고차 함수 (Higher-Order Functions)**: 다른 함수를 인자로 받거나 함수를 반환하는 함수를 말합니다. 이러한 함수는 함수형 프로그래밍의 핵심이며, 코드를 모듈화하고 재사용성을 높이는 데 사용됩니다.
2. **커링 (Currying)**: 여러 개의 인자를 가진 함수를 인자가 하나인 함수들의 연속으로 변환하는 기법입니다. 이를 통해 함수 조합성을 높일 수 있습니다.
3. **함수 조합 (Function Composition)**: 두 개 이상의 함수를 결합하여 새로운 함수를 생성하는 기법입니다. 함수 조합을 통해 각각의 작은 함수들을 조합하여 복잡한 동작을 수행할 수 있습니다.
4. **재귀 (Recursion)**: 함수가 자기 자신을 호출하여 반복적으로 동작하는 기법입니다. 재귀는 데이터 구조를 순회하거나 문제를 분할하여 해결하는 데 자주 사용됩니다.
5. **파이프라인 (Pipeline)**: 함수를 연속적으로 실행하여 데이터를 처리하는 기법입니다. 파이프라인을 사용하면 데이터 변환 과정을 간결하게 표현할 수 있습니다.
6. **불변성 (Immutability)**: 데이터를 변경할 수 없는 형태로 다루는 것을 의미합니다. 불변성을 유지하면 부작용을 줄이고 코드의 예측 가능성을 높일 수 있습니다.
7. **패턴 매칭 (Pattern Matching)**: 입력 데이터나 조건에 따라 다른 동작을 수행하는 패턴을 정의하는 기법입니다. 패턴 매칭은 많은 함수형 프로그래밍 언어에서 지원되며, 코드의 가독성을 향상시키는 데 도움이 됩니다.

### 리액트에서 함수형 컴포넌트와 훅스를 사용하는 이유는 무엇인가요?

- 함수형 컴포넌트는 순수 함수의 특성을 가지고 있어 입력에만 의존하고 외부 상태에 의존하지 않아 재사용성을 높일 수 있다.
- 클래스형 컴포넌트보다 간결하고 가독성이 좋다.
- 클래스형 컴포넌트 보다 렌더링 성능이 우수하다. 함수형 컴포넌트는 메모이제이션과 같은 최적화 기술을 적용하기 쉽고 업데이트에 최적화 되어있기 때문이다.
- 훅스를 상태 관리와 생명주기에 사용하며 일관성과 가독성이 높다.

### **자바스크립트에서 깊은 복사와 얕은 복사의 차이를 설명하고, 깊은 복사를 구현하는 여러 방법에 대해 설명해주세요.**

- 얕은복사는 복사 대상 객체의 첫 번째 수준의 속성들만 복사한다. 중접된 객체는 참조를 복사한다.
- 깊은 복사는 객체의 모든 속성을 재귀적으로 복사하여 완전히 새로운 객체를 생성한다.

깊은 복사를 구현하는 방법

- 재귀적으로 복사한다. 이때 중첩이 길다면 소요시간이 많이 필요할 수 있다.
- JSON.stringify()와 JSON.parse()을 사용하여 복사한다. 이때 순환 참조 참조가 있는 객체는 오류가 발생하며 함수와 RegExp는 변환이 불가하다 또한 Date는 UTC문자열로 변환되어 날짜와 시간을 잃게 된다.

### JSON.stringify와 JSON.parse를 사용한 깊은 복사의 한계는 무엇인가요?

- JSON.stringify와 JSON.parse는 함수, RegExp 등의 특별한 속성은 변환이 불가능하기 때문에 복사가 되지 않는다.
- Date 객체는 UTC문자열로 변환되어 날짜와 시간 정보를 잃게 된다.
- 순환 참조를 포함한 객체를 처리하지 못하고 오류가 발생된다.
- 인스턴스는 함수로 복사가 진행되며 오버라이딩도 되지 않는다.

### lodash의 cloneDeep 함수는 어떻게 깊은 복사를 구현하나요?

1. 객체의 유형을 확인한다.
2. 참조 유형을 복사한다.
    1. 새로운 객체를 생성한다.
    2. 재귀적으로 복사한다.
    3. 속성을 복사한다.
3. 순환 참조를 처리한다.
4. 결과를 반환한다.

### 깊은 복사 과정에서 순환 참조를 처리하는 방법은 무엇인가요?

- 객체를 복사하는 동안 방문한 객체들을 추적하고, 이미 복사한 객체를 다시 복사하지 않도록 처리 해야한다.

### ES6의 Spread 연산자를 사용한 얕은 복사와 깊은 복사의 차이는 무엇인가요?

- Spread 연산자는 얕은 복사는 객체나 배열의 첫 번째 수준의 요소들만 복사한다.
- 깊은 복사를 진행하기 위해서는 재귀를 통하여 전체적으로 복사를 진행하여야한다.

### 메모리 관리 측면에서 깊은 복사와 얕은 복사의 영향은 무엇인가요?

- 얕은 복사는 일부 요소를 참조하므로 메모리 사용량이 적지만, 공유된 요소가 많을 경우에는 메모리 공간을 낭비할 수 있다.
- 깊은 복사는 복사본과 원본이 완전히 독립적이므로 메모리 사용량이 더 많아질 수 있으며, 복사하는 대상의 크기가 클수록 복사하는 데에 시간과 자원이 더 소요될 수 있다.