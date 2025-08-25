import { useState } from 'react'
import { LearnSection } from '@/components'

export default function App() {
  console.log('App 렌더링')
  const [isVisible, setIsVisible] = useState(true)
  const handleInput = (e) => setIsVisible(e.target.checked)

  return (
    <LearnSection
      className="p-10"
      title="컴포넌트 라이프사이클(생명주기: 탄생(mount) -> 성장(update) -> 죽음(unmount)"
    >
      <label className="flex gap-1 items-center">
        <input
          type="checkbox"
          name="is-visible"
          aria-label="Child 컴포넌트 표시"
          checked={isVisible}
          onChange={handleInput}
        />
        Child 컴포넌트 표시 ({isVisible.toString()})
      </label>
      {isVisible ? <Child /> : null}
    </LearnSection>
  )
}

// 컴포넌트 라이프 사이클 단계
// 1. 생성(mount)
// 2. 변경(update) x N (여러 번 발생할 수 있음)
// 0. 소멸(unmount)
// 어떤 특정한 객체가 시간의 흐름에 따라 변경하는 것을 라이프 사이클이라고 하는데, 그 단계는 생성, 변경, 소멸이라고 말할 수 있다.
function Child() {
  console.log('Child 렌더링')

  const [headline, setHeadline] = useState('Child 컴포넌트')
  return (
    <article className="mt-5 p-5 border-2 border-inherit">
      <h2>{headline}</h2>
      <button
        type="button"
        className="button"
        onClick={() => setHeadline((h) => h + '🦁')}
      >
        사자 이모지 추가
      </button>
    </article>
  )
}
