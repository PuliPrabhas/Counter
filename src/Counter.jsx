import { useState } from "react"

function Counter(){
    let count = 0
    let arr = useState(0)
    function incCount(){
        count+=1
        console.log(count)
        return count
    }
    return (
        <div>
            <button onClick={incCount}>Click Me</button>
            <h1>Count{count}</h1>
        </div>
    )
}