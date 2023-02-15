import '../../styles/components/layout/Nav.css';
import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return(
        <nav>
            <div className="holder">
                <ul>
                    <li>< NavLink to="/" className={({isActive})=> isActive ? 'active' : undefined}>HOME </NavLink></li>
                    <li>< NavLink to="/nosotros" className={({isActive})=> isActive ? 'active' : undefined} >NOSOTROS </NavLink></li>
                    <li>< NavLink to="/servicios" className={({isActive})=> isActive ? 'active' : undefined}>SERVICIOS </NavLink></li> 
                    <li>< NavLink to="/contacto" className={({isActive})=> isActive ? 'active' : undefined} >CONTACTO </NavLink></li>
                    </ul>
            </div>
        </nav>
    )
}

                export default Nav; 