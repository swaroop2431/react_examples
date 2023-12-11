 import React,{useState} from 'react';
 
// export default function  ControlledComponent()  {
// 	const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
// 	};

// return  (
//   <div>
// 	<label>Input Value:
// 	<input  type="text"  value={inputValue} onChange={handleChange} />
// 	</label>
// 	<p>Input Value: {inputValue}</p>
// </div>

// )};

// import React,{useState} from 'react';

export default function  ControlledComponent() {
	const[inputvalue,setInputvalue] = useState("");

	const handlechange = (event) =>{
		setInputvalue(event.target.value);
	}

	return(
		<>
            <h2>Hello {inputvalue}!</h2>
            <input type="text" value={inputvalue} onChange={handlechange} />
            <button>submit</button>
		</>
	)
}

// import React,{useState} from 'react';

// export default function Componentsss(){

// 	const[ischecked,setIschecked]=useState(false)
// 	const handlechange = () => {
// 		setIschecked(!ischecked);
// 	  };
// 	return(
//     <form>
//       <label htmlFor="color">
//         <input type="checkbox" name="color" value={ischecked} onChange={handlechange} />
//         Blue
// 		<input type="checkbox" name="color" value={ischecked} onChange={handlechange}/>pink
// 		<input type="checkbox" name="color" value={ischecked} onChange={handlechange}/>orange
//       </label>
//     </form> 
// 	)
// }

