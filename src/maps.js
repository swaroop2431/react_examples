import User from "./user";

function Maps(){
    let users=[
        {id:1, name:'swaroop',age:21},
        {id:2, name:'ravi',age:22},
        {id:3, name:'gowtham',age:23}
    ]
    return(
        <>
      {
        users.map(
          (u)=>{
            return <User id={u.id} name={u.name} age={u.age} />
          }
        )
      }
    </>
    )
}

export default Maps