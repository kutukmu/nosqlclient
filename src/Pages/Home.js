import Layout from  '../Components/Layout'
import {Link} from "react-router-dom"

const Home = () =>{
    return <Layout>
        <div className = "home">
            <div className = "home-left">
                <h1>Find the most</h1>
                <h1>exciting Cougar products</h1>
                <p>Focus is the easiest way to manage your daily to-dos. Organize your projects, keep track of your progress and get things done.</p>
                <Link to = "/products" className = "mainButton">Explore</Link>
            </div>
            <div className = "home-right">
                <img src = "./site.png" alt = "asd" className = "hero-img"/>
            </div>
        </div>
    </Layout>
}

export default Home