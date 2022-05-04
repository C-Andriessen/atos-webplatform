import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { themeContext } from '../context/themeContext';
import logo from '../logo.svg'
import { BsBrightnessAltHigh, BsBrightnessAltHighFill} from "react-icons/bs";

function Header () {

    const {theme} = useContext(themeContext);

    function handleClick () {
        if (theme === 'dark') {
            document.cookie = 'theme=light'
            window.location.reload()
        } else if (theme === 'light') {
            document.cookie = 'theme=dark';
            window.location.reload()
        }
    }


    if (theme === 'light') {
    return <header>
        <img src={logo} alt="logo" />
        <nav className='header'>
            <Link to='/'>Home</Link>
            <Link to='/explanation'>Hoe werkt het</Link>
            <Link to='/excercises'>Opdrachten</Link>
            <Link to='/students'>Studenten</Link>
        </nav>
        <nav className='header'>
            <Link to='/register'>Registreren</Link>
            <Link to='/login' className='login-button'>Inloggen</Link>
        </nav>
        <button onClick={handleClick} className='btn text-grey fs-2' ><BsBrightnessAltHighFill /></button>
    </header>
    } else if (theme === 'dark') {
        return <header>
        <img src={logo} alt="logo" />
        <nav className='header'>
            <Link to='/' className='text-darkmode'>Home</Link>
            <Link to='/explanation' className='text-darkmode'>Hoe werkt het</Link>
            <Link to='/excercises' className='text-darkmode'>Opdrachten</Link>
            <Link to='/students' className='text-darkmode'>Studenten</Link>
        </nav>
        <nav className='header'>
            <Link to='/register' className='text-darkmode'>Registreren</Link>
            <Link to='/login' className='login-button text-darkmode'>Inloggen</Link>
        </nav>
        <button onClick={handleClick} className='btn text-light fs-2'><BsBrightnessAltHigh className='' /></button>
    </header>
    }
}

export default Header;