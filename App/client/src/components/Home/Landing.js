import {useState} from 'react';
import hero_img from './hero.jpg';
import search_icon from './search-icon.svg'

function Landing () {

    const [mode, setMode] = useState('dark')

    const [location, setLocation] = useState('')
    const [service, setService] = useState('')
    const [school, setSchool] = useState('')

    const [errorLocation, setErrorLocation] = useState('');
    const [errorService, setErrorService] = useState('');
    const [errorSchool, setErrorSchool] = useState('');

    function handleLocationChange (ev) {
        setLocation(ev.target.value);
    }

    function handleServiceChange (ev) {
        setService(ev.target.value);
    }

    function handleSchoolChange (ev) {
        setSchool(ev.target.value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        if (location.length === 0) {
            setErrorLocation('Vul de locatie in')
        } else {
            setErrorLocation('')
        }
        if (service.length === 0) {
            setErrorService('Vul in wat voor klus u zoekt')
        } else {
            setErrorService('')
        }
        if (school.length === 0) {
            setErrorSchool('Vul uw voorkeurs school in')
        } else {
            setErrorSchool('')
        }
        // alert(school)
        // alert(location)
        // alert(service)
    }


    if (mode === 'light') {
        return (
            <div className='landing'>
            <div className='text-section'>
                <h1 className='landing-text-light'>Zoek een <span className='text-purple'>student</span> die past bij uw <span className='text-purple'>klus</span></h1>
                <p>Vul hier de locatie in waar u bent en wat 
                    de klus inhoud waar u hulp bij nodig heeft</p>
                <form method='get'  className='hero-form' onSubmit={handleSubmit}>
                    <div className='flex-column'>
                    <label>Locatie</label>
                    <input name='locatie' value={location} onChange={handleLocationChange} placeholder='Groningen' />
                    <span className='error'>{errorLocation}</span>
                    </div>
                    <div className='flex-column px-3 line-left'>
                        <label>Welke service</label>
                    <input name='service' value={service} onChange={handleServiceChange} placeholder='Software Developer' />
                    <span className='error'>{errorService}</span>
                    </div>
                    <div className='flex-column line-left pl-2'>
                    <label>Voorkeur school</label>
                    <input name='school' value={school} onChange={handleSchoolChange} placeholder='Noorderpoort' />
                    <span className='error'>{errorSchool}</span>
                    </div>
                    <button type='submit' className='ml-2'><img src={search_icon} alt='zoeken'></img></button>
                </form>
            </div>
                <img src={hero_img} alt="logo" className='hero'/>
        </div>
        )
    } else if (mode === 'dark') {
        const body = document.querySelector('body');
        body.style.backgroundColor = '#2F3136';

        return (<>
            <div className='landing'>
            <div className='text-section'>
                <h1 className='landing-text darkmode'>Zoek een <span className='text-purple'>student</span> die past bij uw <span className='text-purple'>klus</span></h1>
                <p className='darkmode'>Vul hier de locatie in waar u bent en wat 
                    de klus inhoud waar u hulp bij nodig heeft</p>
                <form method='get'  className='hero-form darkmode' onSubmit={handleSubmit}>
                    <div className='flex-column'>
                    <label>Locatie</label>
                    <input name='locatie' value={location} onChange={handleLocationChange} placeholder='Groningen' />
                    <span className='error'>{errorLocation}</span>
                    </div>
                    <div className='flex-column px-3 line-left'>
                        <label>Welke service</label>
                    <input name='service' value={service} onChange={handleServiceChange} placeholder='Software Developer' />
                    <span className='error'>{errorService}</span>
                    </div>
                    <div className='flex-column line-left pl-2'>
                    <label>Voorkeur school</label>
                    <input name='school' value={school} onChange={handleSchoolChange} placeholder='Noorderpoort' />
                    <span className='error'>{errorSchool}</span>
                    </div>
                    <button type='submit' className='ml-2'><img src={search_icon} alt='zoeken'></img></button>
                </form>
            </div>
                <img src={hero_img} alt="logo" className='hero'/>
        </div>
        </>
        )
    }
}

export default Landing;