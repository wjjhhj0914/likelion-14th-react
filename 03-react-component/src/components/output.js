export default function Output(props) {
  let classNames = 'output';

  if (props.isAnimate) {
    /* 컴포넌트 속성으로, 상태를 제어하는 클래스  */
    // console.log(props.isAnimate);
    classNames += 'is-animate';
  }

  const className = `output ${props.isAnimate ? 'is-animate' : ''}.trim()`;

  return React.createElement('output', { className }, props.children);
}
// 또는 export default outputFunction;

// JavaScript 방식 (명령형 프로그래밍)
// document.querySelector('.output').addEventListener('animationend', (e) => {
//   e.currentTarget.classList.remove('is-animate');
// })
