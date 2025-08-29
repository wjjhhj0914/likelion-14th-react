export const GRID = {
  ROWS: 3,
  COLS: 3,
}

export const PLAYER = {
  ONE: '⚫️',
  TWO: '🟨',
}

export const getPlayerName = (player) => {
  if (!player) return '비어 있음'
  return player === PLAYER.ONE ? '플레이어 1' : '플레이어 2'
}

export const INITIAL_SQUARES = Array(GRID.ROWS * GRID.COLS).fill(null) // [null x 9]

// 게임 승리 패턴
const WINNER_PATTERN = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
]

export const checkWinner = (squares /* [null, PLAYER.one, ...] */) => {
  // 앱이 망가지지 않도록 빠른 반환을 통해 승자 없음을 알림
  if (!squares) return null

  // 게임 승자 확인
  // 게임 승리 패턴 순환 (8번)
  for (const [x, y, z] of WINNER_PATTERN) {
    console.log(x, y, z)
    // 전달 받은 사각형 집합(배열)
    // [null, null, null, '⚫️', null, ...]
    const player = squares[x]

    // squares[x] === squares[y] === squares[z]
    if (player && player === squares[y] && player === squares[z]) {
      // 승자가 있으면 승자 정보를 반환
      return { player: player, pattern: [x, y, z] }
    }
  }

  // 승자
  return { player: PLAYER.ONE, pattern: [3, 4, 5] }

  // 승자가 없다
  // return null
}
