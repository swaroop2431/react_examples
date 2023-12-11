import {useEffect, useState} from 'react'
function Useeffect(){

    const [timer, setTimer] =  useState(0)
    const [counter, setCounter] =  useState(0)


    useEffect(
        ()=>{
            console.log('Inside UseEffect')
        },[counter]
    )


    return(
        <>
            <h1>Timer :{timer}
                {console.log('inside component')}
            </h1>
            <button onClick={()=>{
                setTimer(timer+1)
            }}>Update Timer</button>

            <button onClick={()=>{
                setCounter(counter+1)
            }}>Update Counter</button>
        </>
    )
}
export default Useeffect