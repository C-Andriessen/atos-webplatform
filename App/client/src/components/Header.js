import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg'

function Header () {

    const [mode, setMode] = useState('dark');


    if (mode === 'light') {
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
    </header>
    } else if (mode === 'dark') {
        return <header>
        <img src={logo} alt="logo" />
        <nav className='header'>
            <Link to='/' className='darkmode'>Home</Link>
            <Link to='/explanation' className='darkmode'>Hoe werkt het</Link>
            <Link to='/excercises' className='darkmode'>Opdrachten</Link>
            <Link to='/students' className='darkmode'>Studenten</Link>
        </nav>
        <nav className='header'>
            <Link to='/register' className='darkmode'>Registreren</Link>
            <Link to='/login' className='login-button darkmode'>Inloggen</Link>
        </nav>
    </header>
    }
}

export default Header;