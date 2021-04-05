import Navbar from './Navbar'
import Footer from "./Footer"
const Layout  =(props) =>{
    return <div className = "layout">
        
            <div className = "layout-info">
            <Navbar/>
            <div className = "container">
                {props.children}
            </div>

            <Footer/>
            </div>
           
        
    </div>
}

export default Layout