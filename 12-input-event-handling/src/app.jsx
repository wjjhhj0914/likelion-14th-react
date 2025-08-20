import { useState } from 'react'
import { LearnSection } from './components'

export default function App() {
  const [name, setName] = useState('Charlie')

  return (
    <LearnSection className="m-5" title="랜덤 카운트 업">
      <h2>React의 onChange Event Input</h2>
      <div className="mb-5 flex items-center gap-2">
        <label htmlFor="user-name">이름</label>
        <input
          className="border-2 border-indigo-600 text-indigo-700 px-1 py-0.5"
          type="text"
          id="user-name"
          name="user-name"
          value={name}
          onChange={(e) => {
            console.log(e)
          }}
        />
      </div>
      <h2>웹 표준 change Event처럼 작동하는 Input</h2>
      <div className="mb-5 flex items-center gap-2">
        <label htmlFor="user-name2">이름</label>
        <ChangeLikeInput
          type="text"
          id="user-name2"
          className="border-2 border-indigo-600 text-indigo-700 px-1 py-0.5"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <output>{name}</output>
    </LearnSection>
  )
}
