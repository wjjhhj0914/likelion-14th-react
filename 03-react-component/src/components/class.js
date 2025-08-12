// 클래스 리액트 컴포넌트
// 클래스가 리액트 엘리먼트를 렌더링

// class 구문(syntax)
// class 클래스이름 {}

// React의 컴포넌트 class를 작성하려면?
// React.컴포넌트 클래스(super)를 확장한 서브 클래스 생성
class AppButton extends React.Component {
  // 생성자(constructor) 함수
  constructor(props) {
    super(props);
    // 이 안에서 무언가를 하지 않으면 생략 가능
    // 무언가를 한다면, 생략 불가! 예를 들어, 컴포넌트의 상태를 설정한다. (로컬 데이터)
    // this.state = {};
  }

  // render 메서드
  render() {
    // render는 결국 함수와 같기 때문에, 객체 구조 분해 할당 가능
    const { type, className, disabled, children } = this.props;
    // react element 반환
    return React.createElement(
      'button',
      {
        type: type,
        className: className,
        disabled: disabled,
      },
      children
    );
  }
}

// React에서는 이렇게 사용하면 안 됨 ❌
// JavaScript에서 class로부터 인스턴스를 생성하려면?
// const appButton = new AppButton();
// console.log(appButton);

// React에서는 이렇게 사용해야 함 ✅
// React의 방식으로 컴포넌트로부터 엘리먼트 생성
const disabledSubmitButton = React.createElement(
  AppButton,
  {
    disabled: true,
    type: 'submit',
    className: 'submit-button',
  },
  '폼 제출'
);
// console.log(disabledSubmitButton);

const enabledNormalButton = React.createElement(
  AppButton,
  {
    disabled: false,
    type: 'button',
    className: 'normal-button',
  },
  '표시/감춤'
);
console.log(disabledSubmitButton);

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      'div',
      { className: 'app' },
      disabledSubmitButton,
      enabledNormalButton
    );
  }
}

// ReactDOM을 사용해 실제 DOM에 렌더링
ReactDOM.createRoot(document.getElementById('container')).render(
  React.createElement(App)
);
