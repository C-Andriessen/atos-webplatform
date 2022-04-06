import hero_img from './hero.jpg';
import search_icon from './search-icon.svg'

function Landing () {
    return (
        <div className='landing'>
            <div className='text-section'>
                <h1 className='landing-text'>Zoek een <span className='text-purple'>student</span> die past bij uw <span className='text-purple'>klus</span></h1>
                <p>Vul hier de locatie in waar u bent en wat 
                    de klus inhoud waar u hulp bij nodig heeft</p>
                <form method='get' action='#' className='hero-form'>
                    <div className='flex-column'>
                    <label>Locatie</label>
                    <input name='locatie' value='Groningen' />
                    </div>
                    <div className='flex-column px-3 line-left'>
                        <label>Welke service</label>
                    <input name='service' value='Software developer' />
                    </div>
                    <div className='flex-column line-left pl-2'>
                    <label>Voorkeur school</label>
                    <input name='school' value='School' />
                    </div>
                    <button><img src={search_icon} alt='zoeken'></img></button>
                </form>
            </div>
                <img src={hero_img} alt="logo" className='hero'/>
        </div>
    )
}

export default Landing;