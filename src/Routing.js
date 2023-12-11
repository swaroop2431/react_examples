import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Login from './Login'


function Header(){
    return(
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <li><Link to="/Login">Login</Link></li>
        </ul>
    )
}


export default function Routing (){
    return(
        <>
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/About" element={<About />}/>
                        <Route path="/Contact" element={<Contact />}/>
                        <Route path="/Login" element={<Login />}/>
                    </Routes>
            </BrowserRouter>
        </>
    )
}