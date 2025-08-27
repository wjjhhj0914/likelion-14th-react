import { useEffect, useState } from 'react'
import { LearnSection } from '@/components'
import { wait } from './utils'

const API_URL = 'https://jsonplaceholder.typicode.com/albums/10'

export default function App() {
  console.log('App 렌더링')

  const [key, setKey] = useState(0)

  // 데이터 가져오기(fetching data) 상태 관리
  // 1. 로딩(loading | pending)
  const [loading, setLoading] = useState(false)
  // 2. 에러(error)
  const [error, setError] = useState(null)
  // 3. 데이터(data)
  const [data, setData] = useState(null)

  // 부수 효과
  useEffect(() => {
    // 로딩 상태로 전환
    setLoading(true)
    // 에러 상태 전환 (초기화)
    setError(null)

    // 리액트 렌더링은 항상 동기 방식으로 작동
    // 리액트 렌더링과 무관한 서버에서 데이터 가져오기 코드
    fetch(API_URL)
      .then(async (response) => {
        await wait(1)

        if (response.ok) return response.json()

        if (response.status === 404)
          throw new Error(
            'API 요청에 따른 응답된 데이터를 찾을 수 없습니다. ⚠️'
          )
      })
      // resolved 상태
      .then((responseData) => {
        // 데이터 업데이트
        setData(responseData) // null => data로 응답이 업데이트될 것.
      })
      // rejected 상태
      .catch((error) => {
        // 에러 상태 전환
        setError(error)
      })
      // resloved 또는 rejected 모든 상태에서 최종 처리
      .finally(() => {
        setLoading(false)
      })
  }, [])

  // 상태 관리
  console.log({ loading, error, data })

  // 조건부 렌더링 (화면에 표시)
  // - 조건문 사용
  // - 조건식 사용
  // - JSX 내부에 조건식 사용

  // JSX 내부에서 조건식 렌더링
  return (
    <LearnSection title="데이터 가져오기(fetching Data)" showTitle>
      {loading && (
        <p
          role="status"
          aria-live="polite"
          className="text-indigo-300 font-semibold text-2xl"
        >
          로딩 중. . .
        </p>
      )}
      {error && (
        <p
          role="alert"
          aria-live="assertive"
          className="text-red-600 font-semibold text-2xl"
        >
          오류 발생!! {error.message}
        </p>
      )}
      {data && (
        <p className="text-indigo-600 font-semibold text-2xl">
          {/* 혹시나 데이터가 undefined일 경우를 위한 옵셔널 체이닝 코드 */}
          앨범 타이틀 : {data?.id} | {data?.title ?? 'Album Title'}
        </p>
      )}
      <div role="group" className="mt-5">
        <button
          type="button"
          className="button"
          onClick={() => setKey((k) => k + 1)}
        >
          렌더링 키 변경
        </button>
        <output>렌더링 키: {key}</output>
      </div>{' '}
    </LearnSection>
  )
}
