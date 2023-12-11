// function DataBinding(){
//     let num=100
//     return(
//         <>
//             <h1>{num}</h1>
//             <button onClick={()=>{num=200}}>Click</button>
//         </>
//     )
// }


// import {useState} from 'react'

// function DataBinding(){
//     let [num, upDateNum] = useState(100)

//     return(
//         <>
//             <h1>{num}</h1>
//             <button onClick={()=>{
//                 upDateNum(200)
//             }}>Click</button>
//         </>
//     )
// }


import {useState} from 'react'

function DataBinding(){
    let [num, upDateNum] = useState(100)

    return(
        <>
            <h1>{num}</h1>
            <button onClick={()=>{
                upDateNum(200)
            }}>Click</button><br></br>
            <input type ='text' onChange={
                (e)=>{
                    let temp =e.target.value;
                    upDateNum(temp)
                }
            } value={num} />
        </>
    )
}

export default DataBinding