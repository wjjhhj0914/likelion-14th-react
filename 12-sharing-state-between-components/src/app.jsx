import { useState } from 'react'
import emotions from '@/data/emotions.json'
import { ChangeButton, EmotionFigure } from './components/emotions'
import LearnSection from './components/learn-section'
import { getRandomIndex } from './utils'

export default function App() {
  const [randomIndex, setRandomIndex] = useState(
    getRandomIndex(emotions.length)
  )

  const emotion = emotions[randomIndex]

  const handleClick = () => {
    setRandomIndex(getRandomIndex(emotions.length))
  }

  return (
    <LearnSection title="리액트 컴포넌트 상태 공유 학습">
      <EmotionFigure />
      <ChangeButton emotion={emotion} />
    </LearnSection>
  )
}
