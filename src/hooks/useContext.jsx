import React, { useState, useContext } from 'react'

const CountContext = React.createContext()

function UseContext() {
  const [count, setCount] = useState(1)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <CountContext.Provider value={count}>
        <Son />
      </CountContext.Provider>
    </div>
  )
}

function Son() {
  // 拿到 跨级组件中的值
  /**
   * 之前得这样写
   * class Foo extends Component{
    render(){
        return <div>
            <CountContext.Consumer>
                {
                    value => <h1>{value}</h1>
                }
            </CountContext.Consumer>
        </div>
    }
}
   */
  const count = useContext(CountContext)
  return <div>在儿子组件:{count}</div>
}

export default UseContext
