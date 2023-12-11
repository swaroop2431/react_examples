export default function ConditionalRendering (){
    return(
        <>
            <Header></Header>
        </>
    )
}

let loggedIn = false;

function Header(){
    return(
        <>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
        
            {
                loggedIn?(<li>Logout</li>):(<li>Login</li>)
            }
        </>
    )
}