import { Link } from 'react-router-dom';
import logo from '../logo.svg'

function Header () {
    return <header>
        <img src={logo} alt="logo" />
        {/* options */}
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/explanation'>Hoe werkt het</Link>
            <Link to='/excercises'>Opdrachten</Link>
            <Link to='/students'>Studenten</Link>
        </nav>
        {/* login/register */}
        <nav className='header'>
            <Link to='/register'>Registreren</Link>
            <Link to='/login' className='login-button'>Inloggen</Link>
        </nav>
    </header>
}

export default Header;