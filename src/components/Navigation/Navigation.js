import './Navigation.css'
import { Link } from 'react-router-dom'
import userIcon from '../../images/user-icon.svg'

function Navigation(props) {
  return (
    <>
    <div className='navigation__movies'>
      <Link to='/movies' className="navigation__movies-link">Фильмы</Link>
      <Link to='/saved-movies' className="navigation__saved-movies">Сохранённые фильмы</Link>
    </div>
    <div className='navigation__profile'>
      <Link to='/profile' className='navigation__profile-link'>Аккаунт</Link>
       <div className='navigation__profile-icon'>
        <img src={userIcon} alt='Иконка пользователя' className='user-icon' />
      </div>
    </div>

    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <div class="menu__box">
        <ul className='menu__contain'>
          <div>
            <li><Link to='/' className={props.link === '/' ? "menu__item menu__item_active" : "menu__item"}>Главная</Link></li>
            <li><Link to='/movies' className={props.link === '/movies' ? "menu__item menu__item_active" : "menu__item"}>Фильмы</Link></li>
            <li><Link to='/saved-movies' className={props.link === '/saved-movies' ? "menu__item menu__item_active" : "menu__item"}>Сохранённые фильмы</Link></li>
          </div>
          <div className='menu__box-user'>
            <Link to='/profile' className='menu__profile-item'>Аккаунт</Link>
            <div className='navigation__profile-icon'>
              <img src={userIcon} alt='Иконка пользователя' className='user-icon' />
            </div>
          </div>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Navigation