import CompB from './CompB'

function CompA(){
    let data=[
        {id:1, username:'Swaroop', age:21, dept: 'IT'},
        {id:2, username:'Ravi', age:22, dept: 'CSE'},
        {id:3, username:'Gowtham', age:22, dept: 'ECE'}
    ]
    return(
        <>
        <CompB data={data}/>
            {/* {
                data.map(
                    (u)=>{
                        return <CompB id={u.id} username={u.username} age={u.age} dept={u.dept}></CompB>
                    }
                )
            } */}
        </>
    )
}

export default CompA