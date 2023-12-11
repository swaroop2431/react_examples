import {useState} from 'react'
import './counter.css'

function Counter(){

    let [counter, setCounter] = useState(0)

    return(
        <div className='main'>
            <button className='plus' onClick={()=>setCounter(counter+1)}>+</button>
            <p>{counter}</p>
            <button className='minus' onClick={()=>setCounter(counter-1)}>-</button>

        </div>
    )
}
export default Counter








