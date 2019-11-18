import React,{useState,useEffect} from 'react'
import axios from 'axios'

function UseEffect(){
    /**
     * useState 是一个函数 它接收一个参数作为默认值
     * 
     * 返回的是一个数组，数组中有两个元素，元素1：模型的变量名，它是用来获取值
     *  元素2，是一个方法，用来更改前面一个模型值
     */
    const [count,setCount] = useState(1)
    
    const [name,setName] = useState('小爱')

    // 处理副作用
    /**
     * 如果写了第二个参数，那么只有依赖项(count)发生变化的时候，才会执行副作用
     */
    useEffect(() => {
        console.log('---useEffect---')
        document.title = count
    },[count])

    /**
     * 第二个参数如果是 [] 只会执行一次
     */
    useEffect(() => {
        async function getSwiper() {
            const result = await axios.get('http://huangjiangjun.top:8088/home/swiper')
            console.log(result.data)
        }

        getSwiper()
    },[])

    return <div>
        count is {count}&nbsp;&nbsp;<button onClick={() => setCount(count + 1)}>+1</button><br/>
        
        姓名是：{name} <br/> 
        <input value={name} type="text" onChange={e => setName(e.target.value)}/>
    </div>
}

export default UseEffect