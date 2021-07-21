import './Header.css'
import { Link } from 'react-router-dom'
import headerLogo from '../../images/header-logo.svg'
import Navigation from '../Navigation/Navigation'

function Header(props) {
  return (
    <header className='header'>
      <div className='header__box'>
        <img src={headerLogo} alt='Логотип сайта' className='logo'/>
        <div className='header__links'>
        {props.page === '/' ? (
          <>
          <Link to='/signup' className='header__sign-up'>Регистрация</Link>
          <Link to='/signin' className='header__sign-in'>Войти</Link>
          </>
        ) : (   
          <>     
          <Navigation link={props.path} />
          </>)}
        </div>
      </div>
    </header>
  )
}

export default Header