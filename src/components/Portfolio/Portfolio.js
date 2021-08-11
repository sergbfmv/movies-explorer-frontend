import './Portfolio.css'
import arrow from '../../images/arrow.png'

function Portfolio() {
  return(
    <section className='portfolio'>
      <div className='portfolio__box'>
        <h2 className='portfolio__title'>Портфолио</h2>
        <a href='https://sergbfmv.github.io/how-to-learn-main/' target='_blank' rel='noreferrer' className='portfolio__link'>
          <div className='portfolio__link-contain'>
            <p className='portfolio__text'>Статичный сайт</p>
            <img src={arrow} className='portfolio__image' alt='Стрелка'></img>
          </div>
        </a>
        <a href='https://sergbfmv.github.io/russian-travel/' target='_blank' rel='noreferrer' className='portfolio__link'>
          <div className='portfolio__link-contain'>
            <p className='portfolio__text'>Адаптивный сайт</p>
            <img src={arrow} className='portfolio__image' alt='Стрелка'></img>
          </div>
        </a>
        <a href='https://serg-mesto.nomoredomains.monster' target='_blank' rel='noreferrer' className='portfolio__link'>
          <div className='portfolio__link-contain'>
            <p className='portfolio__text'>Одностраничное приложение</p>
            <img src={arrow} className='portfolio__image' alt='Стрелка'></img>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Portfolio;