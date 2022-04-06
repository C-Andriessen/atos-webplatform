import { Link } from 'react-router-dom';
import logo from '../logo.svg'

function Header () {
    return <header>
        <img src={logo} alt="logo" />
        {/* options */}
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/how-it-works'>Hoe werkt het</Link>
            <Link to='/exercises'>Opdrachten</Link>
            <Link to='/students'>Studenten</Link>
        </nav>
        {/* login/register */}
        <nav className='header'>
            <Link to='/register'>Registreren</Link>
            <Link to='/login' className='login-button'>inloggen</Link>
        </nav>
    </header>
}

export default Header;