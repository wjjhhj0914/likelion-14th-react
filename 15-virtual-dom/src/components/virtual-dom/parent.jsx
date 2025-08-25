import { useState } from 'react'
import Child from './child'

// 리액트는 합성 이벤트(내부에 네이티브 이벤트 포함) 사용
// 리액트는 합성 이벤트 뿐만 아니라 이벤트 위임(전파)을 사용
// 이벤트 전파 단계 (capture, bubble)

export default function Parent() {
  console.log('Parent 렌더링')

  const [headline, setHeadline] = useState('부모 컴포넌트')
  const handler = (e) => {
    e.stopPropagation()
    if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
      setHeadline((h) => h + '👏')
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="p-5 border-2 border-blue-600"
      onClick={handler}
      onKeyDown={handler}
    >
      <h3 className="text-xl font-semibold border-blue-600">{headline}</h3>
      <Child />
    </div>
  )
}
