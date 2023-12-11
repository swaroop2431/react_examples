function CompD({data}){
    console.log(data)
    return(
        <div>
            {
                data?.map(i=>(
                    <div>
                        <p>ID:{i.id}</p>
                        <p>Username:{i.username}</p>
                        <p>Age:{i.age}</p>
                        <p>Dept:{i.dept}</p> </div>
                ))
            }
            
        </div>
    )
}

export default CompD


