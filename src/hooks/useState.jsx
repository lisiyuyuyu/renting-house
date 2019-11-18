import React,{useState} from 'react'

function UseState(props){
    /**
     * useState 是一个函数 它接收一个参数作为默认值
     * 
     * 返回的是一个数组，数组中有两个元素，元素1：模型的变量名，它是用来获取值
     *  元素2，是一个方法，用来更改前面一个模型值
     */
    const [count,setCount] = useState(1)

    const [name,setName] = useState('小爱')

    return <div>
        count is {count}&nbsp;&nbsp;<button onClick={() => setCount(count + 1)}>+1</button><br/>
        姓名是：{name} --- 真名是：{props.name} --- {props.age}<br/> 
        <input value={name} type="text" onChange={e => setName(e.target.value)}/>
    </div>
}

export default UseState