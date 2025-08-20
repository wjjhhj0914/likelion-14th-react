import { useState } from 'react'
import emotions from '@/data/emotions.json'
import './change-button.css'

export default function ChangeButton() {
  return (
    <button type="button" className="change-button" onClick={handleClick}>
      {emotions[randomIndex].message}
    </button>
  )
}
