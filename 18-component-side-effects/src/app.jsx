import { useEffect, useState } from 'react'
import { LearnSection } from '@/components'

// 컴포넌트 렌더링은 상태 관리와 관련 있음.
// 사이드 이펙트 (부수 효과 : 외부 시스템에서 데이터 가져오기 : 만약 종속성이 없어서 항상 실행이라면?)
// 컴포넌트와 외부 시스템을 동기화 시키려면, 부수 효과에서 상태를 업데이트해야 한다.

export default function App() {
  // 리액트 렌더링 프로세스 구간: 시작 (렌더 단계)
  const [message, setMessage] = useState('컴포넌트의 부수 효과 관리')
  const [condition] = useState(true)

  // 리액트 컴포넌트의 부수 효과 관리를 위한 특별한 훅 함수를 사용할 수 있다.
  useEffect(
    // 이펙트 콜백(함수) : 필수
    // - 부수 효과 처리를 함
    // - 리액트 컴포넌트 렌더링과 분리된 별도의 공간임
    () => {
      // 즉, 내부 코드는 꼭 순수하지 않아도 된다.
      // 왜냐면 여기는 이펙트 함수 내부니까요!
      // - 클래스 컴포넌트로 따지면, componentDidMount(서버에 데이터 가져오기), componentDidUpdate, componentWillUpdate에 해당.
      // useEffect는 렌더링과 무관하게 나중에 실행됨. (커밋 단계에 해당)
      console.log('컴포넌트 마운트 이후 실행')
      // console.log(
      //   '함수 컴포넌트의 이벤트 함수 내부 영역: ',
      //   document.querySelector('[data-target]')
      // )
    },
    // 종속성(의존성) 목록 추가 (DependencyList?)
    // 종속성이 비었다? 이 말인 즉슨, 렌더링 처음에만 실행 === componentDidMount
    // 무조건 실행되는 건 성능 이슈가 있고,
    // 항상 넣어주는 게 좋음.
    []
  )

  // console.log(
  //   '함수 컴포넌트의 렌더(몸체) 영역: ',
  //   document.querySelector('[data-target]')
  // )

  return (
    <LearnSection title="이펙트 관리 훅" showTitle>
      <p data-target>{message}</p>
      <button
        type="button"
        className="button mt-4"
        onClick={() => setMessage((m) => m + '🤓')}
      >
        설명 업데이트
      </button>
    </LearnSection>
  )
  // 리액트 렌더링 프로세스 구간: 끝
}
