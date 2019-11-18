import React, { useReducer } from 'react'

const initCounter = {
  count: 3
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 }

    case 'MINUS':
      return { count: state.count - 1 }

    default:
      return state
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initCounter)

  return (
    <div>
      值是: {state.count} <br />
      <button onClick={() => dispatch({ type: 'MINUS' })}>-1</button>
      &nbsp;&nbsp;<button onClick={() => dispatch({ type: 'ADD' })}>+1</button>
    </div>
  )
}

export default UseReducer
