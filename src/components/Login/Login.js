import './Login.css'
import headerLogo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';

function Login(props) {
  return(
    <section className='login'>
      <div className='login__box'>
        <div className='login__heading'>
          <img src={headerLogo} alt='Логотип сайта' className='logo'/>
          <h2 className='login__title'>Рады видеть!</h2>
        </div>
        <form className='login__form'>
          <label className="login__form-field">
            <p className='login__form-text'>E-mail</p>
            <input id="email-input" type="email" name="email" placeholder="Почта" className="login__placeholder login__placeholder_type_email"/>
            <span className="name-input-error login__placeholder-error"></span>
          </label>
          <label className="login__form-field">
            <p className='login__form-text'>Пароль</p>
            <input id="password-input" type="password" name="password" placeholder="Пароль" className="login__placeholder login__placeholder_type_password"/>
            <span className="name-input-error login__placeholder-error"></span>
          </label>
          <button type="submit" name="login" className="login__button">Зарегистрироваться</button>
          <p className="login__text">Ещё не зарегистрированы? <Link to='/signup' className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </section>
)}

export default Login;