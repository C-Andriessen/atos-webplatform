import {useState} from 'react';
import { FaSearch } from 'react-icons/fa'
import hero_img from './hero.jpg';

function Landing (props) {
    console.log(props.mode);

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
        const locationErrTooltip = document.querySelector('.locationErrTooltip');
        const serviceErrTooltip = document.querySelector('.serviceErrTooltip');
        const schoolErrTooltip = document.querySelector('.schoolErrTooltip');

        if (location.length === 0) {
            locationErrTooltip.style.display = 'block'
            setErrorLocation('Vul de locatie in')
        } else {
            locationErrTooltip.style.display = 'none'
            setErrorLocation('')
        }
        if (service.length === 0) {
            serviceErrTooltip.style.display = 'block'
            setErrorService('Vul in wat voor klus u zoekt')
        } else {
            serviceErrTooltip.style.display = 'none'
            setErrorService('')
        }
        if (school.length === 0) {
            schoolErrTooltip.style.display = 'block'
            setErrorSchool('Vul uw voorkeurs school in')
        } else {
            schoolErrTooltip.style.display = 'none'
            setErrorSchool('')
        }
    }


    if (props.mode === 'light') {
        return (
            <div className='landing'>
            <div className='text-section'>
                <h1 className='landing-text'>Zoek een <span className='text-purple'>student</span> die past bij uw <span className='text-purple'>klus</span></h1>
                <p>Vul hier de locatie in waar u bent en wat 
                    de klus inhoud waar u hulp bij nodig heeft</p>
                <form method='get'  className='hero-form' onSubmit={handleSubmit}>
                    <div className='flex-column position-relative'>
                    <label>Locatie</label>
                    <input name='locatie' value={location} onChange={handleLocationChange} placeholder='Groningen' />
                    <div className='locationErrTooltip invalid-tooltip'>{errorLocation}</div>
                    </div>
                    <div className='flex-column px-3 line-left position-relative'>
                        <label>Welke service</label>
                    <input name='service' value={service} onChange={handleServiceChange} placeholder='Software Developer' />
                    <div className='serviceErrTooltip invalid-tooltip'>{errorService}</div>
                    </div>
                    <div className='flex flex-column line-left pl-2 position-relative'>
                    <label>Voorkeur school</label>
                    <input name='school' value={school} onChange={handleSchoolChange} placeholder='Noorderpoort' />
                    <div className='schoolErrTooltip invalid-tooltip'>{errorSchool}</div>
                    </div>
                    <button type='submit' className='btn btn-light'><FaSearch /></button>
                </form>
            </div>
                <img src={hero_img} alt="logo" className='hero'/>
        </div>
        )
    } else if (props.mode === 'dark') {
        return (<>
            <div className='landing'>
            <div className='text-section'>
                <h1 className='landing-text text-darkmode'>Zoek een <span className='text-purple'>student</span> die past bij uw <span className='text-purple'>klus</span></h1>
                <p className='text-darkmode'>Vul hier de locatie in waar u bent en wat 
                    de klus inhoud waar u hulp bij nodig heeft</p>
                <form method='get'  className='hero-form darkmode' onSubmit={handleSubmit}>
                    <div className='flex-column position-relative'>
                    <label>Locatie</label>
                    <input name='locatie' value={location} onChange={handleLocationChange} placeholder='Groningen' />
                    <div className='locationErrTooltip invalid-tooltip'>{errorLocation}</div>
                    </div>
                    <div className='flex-column px-3 line-left position-relative'>
                        <label>Welke service</label>
                    <input name='service' value={service} onChange={handleServiceChange} placeholder='Software Developer' />
                    <div className='serviceErrTooltip invalid-tooltip'>{errorService}</div>
                    </div>
                    <div className='flex-column line-left pl-2 position-relative'>
                    <label>Voorkeur school</label>
                    <input name='school' value={school} onChange={handleSchoolChange} placeholder='Noorderpoort' />
                    <div className='schoolErrTooltip invalid-tooltip'>{errorSchool}</div>
                    </div>
                    <button type='submit' className=' btn btn-primary'><FaSearch /></button>
                </form>
            </div>
                <img src={hero_img} alt="logo" className='hero'/>
        </div>
        </>
        )
    }
}

export default Landing;