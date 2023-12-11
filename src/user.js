function User(p){ 
    return(
        <div style={{border: '2px solid grey'}}>
            <h1>ID: {p.id}</h1>
            <h1>User Name: {p.name}</h1>
            <h2>Age: {p.age}</h2>
        </div>
    )
}

export default User