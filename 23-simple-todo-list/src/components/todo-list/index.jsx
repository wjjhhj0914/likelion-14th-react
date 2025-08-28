import { useState } from 'react'
import { useImmer } from 'use-immer'

export default function SimpleTodoList() {
  const [doit, setDoit] = useState('')
  const handleChange = (e) => setDoit(e.target.value)

  // 할 일 목록 관리
  const [todoList, setTodoList] = useImmer([
    { id: crypto.randomUUID(), doit: '보육원에 가서 점심 사주기', done: false },
  ])

  // 할 일 추가
  const handleAddTodo = (e) => {
    e.preventDefault()

    // 사용자 입력 값 검증
    if (doit.trim().length === 0) return

    // 새 할 일 정의
    const newTodo = {
      id: crypto.randomUUID(),
      done: false,
      doit,
    }

    // 할 일 목록의 맨 앞에 새 할 일 추가

    // Immer 라이브러리 사용법
    // setTodoList((draft) => {
    //   draft.push(newTodo)
    // })

    // useState 상태 업데이트와 동일한 방법
    setTodoList([...todoList, newTodo])

    // 새로운 할 일 상태 초기화
    setDoit('')
  }

  // 할 일 수정
  const handleUpdateTodo = (id, e) => {
    const { checked } = e.target
    console.log(checked)

    // 리액트의 방식 (불변성 유지)
    // const nextTodoList = todoList.map((todo) => {
    //   if (todo.id === id) return { ...todo, done: !todo.done }
    //   return todo
    // })
    // setTodoList(nextTodoList)
    // setTodoList(todoList.map...) 이렇게 바로 사용할 수도 있음!

    // 자바스크립트의 방식 (변형 방식 적용)
    setTodoList((draft) => {
      const editTodo = draft.find((item) => item.id === id)
      if (editTodo) editTodo.done = !editTodo.done
      return draft
    })
  }

  // 할 일 삭제
  const handleDeleteTodo = (id) => {
    // 리액트의 방식 (불변성 유지)
    setTodoList(todoList.filter((todo) => todo.id !== id))

    // 자바스크립트의 방식 (draft를 사용한 변형)
    // 배열의 특정 인덱스 순서의 원소를 삭제하려면?
    setTodoList((draft) => {
      const deleteIndex = draft.findIndex((item) => item.id === id)
      if (deleteIndex > -1) draft.splice(deleteIndex, 1)
    })
  }

  // 커링 함수
  const curring = (a) => (b) => a + b

  // 이해를 위해 함수 선언 형태로 작성
  const curring2 = function (a) {
    const inner = function (b) {
      return a + b
    }
    return inner
  }

  const inner = curring2(180)
  console.log(inner(2)) // 182

  // 파생된 상태 설정
  // 할 일 목록을 역순으로 정렬
  const reversedTodoList = todoList.toReversed()

  return (
    <div className="container">
      <section>
        <h2 className="sr-only">할 일 추가</h2>
        <form className="new-todo-form" onSubmit={handleAddTodo}>
          <div role="group" className="form-control grow">
            <label htmlFor="todo-input">새로운 할 일</label>
            <input
              type="text"
              id="todo-input"
              value={doit}
              onChange={handleChange}
            />
          </div>
          <button className="button" type="submit" disabled={!doit.trim()}>
            추가
          </button>
        </form>
      </section>
      <section>
        <h2 className="sr-only">할 일 목록</h2>
        <ul className="todo-list">
          {reversedTodoList.map(({ id, doit, done }) => {
            const checkboxId = `todo-${id}`
            return (
              <li key={id} className="list-item">
                <div className="form-control row">
                  <input
                    id={checkboxId}
                    type="checkbox"
                    checked={done}
                    onChange={(e) => handleUpdateTodo(id, e)}
                  />
                  <label htmlFor={checkboxId} className="list-item-label">
                    {doit}
                  </label>
                </div>
                <button
                  type="button"
                  // onClick={handleDeleteTodo.bind(null, id)}
                  onClick={() => handleDeleteTodo(id)}
                  // onClick={handleDeleteTodo(id)}
                  // 위에다가 () => {} -> 클로저(Closure) 방식
                >
                  삭제
                </button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
