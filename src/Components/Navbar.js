import {Link} from "react-router-dom"

const Navbar = () =>{

    return <div className = "navbar">
        <div className = "navbar-brand">
            <h3>ECougar</h3>
        </div>
        <ul className = "navbar-nav">
            <li><Link to = "/" className = "nav-link"> Home </Link></li>
            <li><Link to = "/products" className = "nav-link"> Products </Link></li>
            
        </ul>
        


    </div>


}

export default Navbar