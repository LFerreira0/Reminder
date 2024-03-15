import logo from '../../assets/images/bell.png'
import { Link } from 'react-router-dom'
import './Header.scss';

function Header (){
    return(
        <header>
            <div className="logo">
                <img src={logo} alt="Imagem de um sino" />
                <p>Reminder</p>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/account">
                    <button>Account</button>
                </Link>
                
            </nav>

        </header>
    );
}

export default Header