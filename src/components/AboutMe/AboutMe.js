import './AboutMe.css'
import photo from '../../images/photo.png'

function AboutMe() {
  return(
    <section className='about-me' id='student'>
      <div className='about-me__box'>
        <div className='about-me__header'>
          <h2 className='about-me__heading'>Студент</h2>
        </div>
        <div className='about-me__student'>

          <div className='about-me__info'>
            <h2 className='about-me__title'>Сергей</h2>
            <p className='about-me__subtitle'>Фронтенд-разработчик, 30 лет</p>
            <p className='about-me__text'>Отслужил в армии, получил 2 высших образования - экономическое и техническое 
              (техносферная безопасность/инженер по защите в ЧС). 10 лет работаю в Пожарно-спасательном центре города Москвы. 
              Прошел путь от рядового пожарного до заместителя начальника пожарно-спасательного отряда и перешёл работать в 
              управление пожарно-спасательных сил. Параллельно увлёкся программированием и изучением языков программирования.
            </p>
            <div className='about-me__links'>
              <a href='https://www.instagram.com/serg_vale' target='_blank' className='about-me__link' rel='noreferrer'>Instagram</a>
              <a href='https://github.com/sergbfmv' target='_blank' className='about-me__link' rel='noreferrer'>Github</a>
            </div>
          </div>
          
          <div className='about-me__photo'>
            <img src={photo} alt='Фотография автора' className='about-me__picture'></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;