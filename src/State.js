// function State(){
//     let counter = 0
//     return(
//         <>
//             <h1>Counter Value: {counter}</h1>
//             <button onClick={updateCounter}>Change</button>
//         </>
//     )

//     function updateCounter(){
//         ++counter;
//         console.log(counter)
//     }
// }

// export default State


// import React,{useState} from 'react';

// function State(){
//     let [counter, updateCounter] = useState(0)
//     console.log(counter)
//     return(
//         <>
//             <h1>Counter Value: {counter}</h1>
//             <button onClick={()=>{updateCounter(++counter)}}>Change</button>
//         </>

//     )
    
// }

// export default State

// import React from 'react';
// class State extends React.Component{

//     state = {
//         counter: 0
//     }
//     render(){
//         return(
//             <>
//                 <h1>Counter Value: {this.state.counter}</h1>
//                 <button onClick={()=>{this.setState({counter: this.state.counter+1})}}>Change</button>
//             </>
//         )
//     }
// }

// export default State