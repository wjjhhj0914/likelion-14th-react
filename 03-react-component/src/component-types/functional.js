// 함수형 리액트 컴포넌트
// 함수가 리액트 엘리먼트 반환

// 컴포넌트 이름 작명
// 파스칼케이스(PascalCase)

function AppButton(props) {
  console.log(props);

  return React.createElement(
    'button',
    {
      type: props.type,
      className: props.className,
      disabled: props.disabled,
    },
    props.children
  );
}

// React 방식으로 컴포넌트로부터 element 생성
// React에서는 이렇게 사용해야 함! ✅
const disabledSubmitButton = React.createElement(
  AppButton,
  { type: 'submit', className: 'submit-button', disabled: true },
  '폼 제풀'
);
console.log(disabledSubmitButton);

// 컴포넌트 재사용성
const enabledNormalButton = React.createElement(
  AppButton,
  {
    type: 'button',
    className: 'normal-button',
    disabled: false,
  },
  '표시/감춤'
);

// 부모 컴포넌트
function App() {
  return React.createElement(
    'div',
    { className: 'app' },
    disabledSubmitButton,
    enabledNormalButton
  );
}

// ReactDOM을 사용해 실제 DOM에 렌더링
ReactDOM.createRoot(document.getElementById('container')).render(
  React.createElement(App)
);

// const appButtons = Array.from({ length: 5 }).map(() => {
//   return React.createElement(AppButton);
// })

// console.log(appButtons);

// JavaScript 함수로 호출하는 개념
// React에서는 이렇게 사용하면 안 됨! ❌
// console.log(AppButton());
// console.log(AppButton());
// console.log(AppButton());
