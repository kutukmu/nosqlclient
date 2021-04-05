import { AiFillLinkedin, AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

const Footer = () =>{
    return <div className = "footer">
        <div className = "footer-info"> 
            <h4>Kerim Kutuk &copy; 2021</h4> 
        </div>
        <div className = "social-links">
            <ul>
                <li>
                   <a href = "https://www.linkedin.com/in/kerim-kutuk-8258291b3/"><AiFillLinkedin className ="social-icon"/></a> 
                </li>
                <li>
                   <a href = "https://www.linkedin.com/in/kerim-kutuk-8258291b3/"><AiFillGithub className ="social-icon"/></a> 
                </li>
                <li>
                   <a href = "https://www.linkedin.com/in/kerim-kutuk-8258291b3/"><AiOutlineGlobal className ="social-icon"/></a> 
                </li>
            </ul>
        </div>
    </div>
}

export default Footer