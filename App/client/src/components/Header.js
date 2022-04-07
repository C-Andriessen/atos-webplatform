import { Link } from 'react-router-dom';
import logo from '../logo.svg'

function Header (props) {

    function handleClick () {
        if (props.mode === 'dark') {
            document.cookie = 'mode=light'
            window.location.reload()
        } else if (props.mode === 'light') {
            document.cookie = 'mode=dark';
            window.location.reload()
        }
    }


    if (props.mode === 'light') {
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
        <button onClick={handleClick}>Darkmode</button>
    </header>
    } else if (props.mode === 'dark') {
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
        <button onClick={handleClick}>Lightmode</button>
    </header>
    }
}

export default Header;