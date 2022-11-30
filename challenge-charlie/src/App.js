import compass from './assets/icons/compass.svg'
import sun from './assets/icons/sun.svg'
import './App.css';

function App() {
  return (
    <section className="app">
      <div className='c-location'>
        <img src={compass} alt="Compass Icon" className='compassIcon' />
        <p>Rio de Janeiro, Rio de Janeiro</p>
      </div>
      <div className='c-weather'>
        <img src={sun} alt="Sun Icon" className='sunIcon'/>
        <div>
          <div className='c-today'>
            <p className='c-today-title'>Hoje</p>
            <p className='c-today__temperature'>32ºC</p>
          </div>
          <div className='c-weather-stats'>
            <p className='c-weather-stats-title'>Ensolarado</p>
            <div className='c-weather-stats--info'>
              <p>Vento: NO 6.4km/h</p>
              <p>Humidade: 78%</p>
              <p>Pressão: 1003hPA</p>
            </div>
          </div>
        </div>
      </div>
      <div className='c-tomorrow'>
        <div className='c-tomorrow-stats'>
          <p className='c-tomorrow-stats-title'>Amanhã</p>
          <p className='c-tomorrow-stats-temperature'>25ºC</p>
        </div>
      </div>
      <div className='c-after-tomorrow'>
        <div className='c-after-tomorrow-stats'>
          <p className='c-after-tomorrow-title'>Depois de Amanhã</p>
          <p className='c-after-tomorrow--temperature'>22ºC</p>
        </div>
      </div>
    </section>
  );
}

export default App;