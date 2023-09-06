import styles from './Header.modules.css'
import { Link } from 'react-router-dom'

function Header() {
    
    return(
        <div id="head">
            <div id="div-head"> 
                <Link to="/"> PÁGINA INICIAL </Link>

                <div>
                    <label> Guilherme Emanuel, N°17</label><br></br>
                    <label> Nícolas Araújo, N°33</label>
                </div>
            </div>
        </div>
    )
}

export default Header