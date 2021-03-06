## e-commerce website built in React

e-commerce website built in React https://obscure-refuge-92571.herokuapp.com/

### 앱요약

온라인 쇼핑몰 사이트입니다. 리액트 앱 개발 연습을 목적으로 개발했으며, Udemy에서 리액트 프로젝트 강의를 참고하며 개발했습니다. 개인 카트 그리고 온라인 결제 시스템을 구축하는 등 최대한 실제 쇼핑몰처럼 구현하려고 최선을 다했습니다. 또한 앱 전체를 반응형으로 디자인했으며, Progressive 앱을 활성화시켜 모바일 기기에서도 쉽고 빠르게 사이트에 접속할 수 있습니다. 사용 tool은 React js, Redux, firebase, Semantic UI 등입니다.

### 앱 사용법

제 포트폴리오 페이지 하단에 앱 데모 비디오가 있습니다.
https://shawnsportfolio.herokuapp.com/

로그인은 회원가입을 하거나, 구글 또는 페이스북 계정으로 로그인해 주십시오.

### 겪은 어려움

저는 이미지 사이즈가 웹 performance에 큰 영향을 미친다는 것을 알고 있었습니다. 본 앱의 강의를 듣던 중, 강의 교사가 옷, 신발 등 의류의 이미지를 html의 img 태크를 사용하지 않고, css의 background-image 를 사용해서 나타내라고 했습니다. 그 이유가 궁금해 곧바로 질문을 했지만 그 교사는 응답을 하지 않았습니다.
기다리다 지쳐 제가 직접 찾아보기로 결심했고 그 결과 그 두 방법이 performance 적으로는 별 차이가 없는데 반해, (직접 실험도 해봤습니다.) img태그로 이미지를 구현하는 것이 Search Engine Optimization에 훨신 더 잘 노출된다는 것을 알게 되었습니다. 때때로 css background-image가 더 좋은 선택일 수 있지만, 이 쇼핑몰에서는 이미지 태그로 구현하는 것이 옳겠다고 생각했으며 곧바로 코드를 고쳤습니다.

### 배운 점

온라인 코스에서 본 프로젝트를 여러 방식으로 변경하며 개발함에따라, saga, react-thunk, sass, styled-component,
classical, functional component 등, 리액트 개발환경에서 각기 다른 third-party library의 장단점과
상황에 따른 사용 케이스를 정확히 알게되었습니다. 대표적인 예로 요즘 redux-saga 가 redux-thunk 보다 인기가 더 많아진이유, 장점 그리고 차이점 등을 알게되었습니다.

component를 최대한 작게 분리해야 하는 이유 그리고 Redux 이용의 장점을 정확히 이해했습니다.
component를 작게 분리하는 것은 종종 개발자를 귀찮게 합니다. 비슷한 코드를 다시 쓰며 리팩토링을 해야 하는 등, 다소 불편할 수 있습니다. 하지만 나중에 코드 읽기와 수정이 정말 쉬워지고 component 관리도 훨씬 간단해집니다. 또한 리덕스 라이브러리는 복잡한 리액트 앱의 스테이트 관리를 정말 쉽게 하며, asynchronous code 작성 그리고 Data fetching을 간단하게 만듭니다. 리덕스를 사용함에 따라 오류 발생률이 현저히 낮아진다는 것을 알게되었습니다.
