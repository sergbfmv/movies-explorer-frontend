import './Register.css'
import headerLogo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';

function Register(props) {
  return(
    <section className='register'>
      <div className='register__box'>
        <div className='register__heading'>
          <img src={headerLogo} alt='Логотип сайта' className='logo'/>
          <h2 className='register__title'>Добро пожаловать!</h2>
        </div>
        <form className='register__form'>
          <label className="register__form-field">
            <p className='register__form-text'>Имя</p>
            <input id="name-input" type="text" name="name" placeholder="Имя" className="register__placeholder register__placeholder_type_name"/>
            <span className="name-input-error popup__placeholder-error"></span>
          </label>
          <label className="register__form-field">
            <p className='register__form-text'>E-mail</p>
            <input id="email-input" type="email" name="email" placeholder="Почта" className="register__placeholder register__placeholder_type_email"/>
            <span className="name-input-error popup__placeholder-error"></span>
          </label>
          <label className="register__form-field">
            <p className='register__form-text'>Пароль</p>
            <input id="password-input" type="password" name="password" placeholder="Пароль" className="register__placeholder register__placeholder_type_password"/>
            <span className="name-input-error popup__placeholder-error"></span>
          </label>
          <button type="submit" name="register" className="register__button">Зарегистрироваться</button>
          <p className="register__text">Уже зарегистрированы? <Link to='/signin' className="register__link">Войти</Link></p>
        </form>
      </div>
    </section>
)}

export default Register;