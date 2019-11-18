import React,{useRef,useLayoutEffect} from 'react'

function UseRef() {
    const inputRef = useRef()

    useLayoutEffect(() => {
        inputRef.current.focus()
    })

    return <div>
        <input ref={inputRef} type="text"/>
    </div>
}

export default UseRef