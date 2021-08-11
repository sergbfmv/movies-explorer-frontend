import './Footer.css'

function Footer() {
  return(
    <section className='footer'>
      <div className='footer__box'>
        <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className='footer__contain'>
          <p className='footer__copyright'>&copy; 2021</p>
          <ul className='footer__links'>
            <li><a className='footer__link' href='https://praktikum.yandex.ru' target='_blank' rel='noreferrer'>Яндекс.Практикум</a></li>
            <li><a className='footer__link' href='https://github.com/sergbfmv' target='_blank' rel='noreferrer'>Github</a></li>
            <li><a className='footer__link' href='https://www.instagram.com/serg_vale' target='_blank' rel='noreferrer'>Instagram</a></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer;