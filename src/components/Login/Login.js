import './Login.css'
import React from 'react';
import headerLogo from '../../images/header-logo.svg'
import { withRouter, Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value 
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin()
  }

render() {
  return(
    <section className='login'>
      <div className='login__box'>
        <div className='login__heading'>
          <Link to='/'>
            <img src={headerLogo} alt='Логотип сайта' className='logo'/>
          </Link>
          <h2 className='login__title'>Рады видеть!</h2>
        </div>
        <form className='login__form' onSubmit={this.handleSubmit}>
          <label className="login__form-field">
            <p className='login__form-text'>E-mail</p>
            <input onChange={this.props.handleChange} id="email-input" type="email" name="email" placeholder="Почта" className="login__placeholder login__placeholder_type_email" required/>
            <span className={this.props.errors.email ? "name-input-error login__placeholder-error login__placeholder-error_active" : "name-input-error login__placeholder-error"}>{this.props.errors.email}</span>
          </label>
          <label className="login__form-field">
            <p className='login__form-text'>Пароль</p>
            <input onChange={this.props.handleChange} id="password-input" type="password" name="password" placeholder="Пароль" className="login__placeholder login__placeholder_type_password" required/>
            <span className={this.props.errors.password ? "name-input-error login__placeholder-error login__placeholder-error_active" : "name-input-error login__placeholder-error"}>{this.props.errors.password}</span>
          </label>
          <button type="submit" name="login" className="login__button">Войти</button>
          <p className="login__text">Ещё не зарегистрированы? <Link to='/signup' className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </section>
  )}
}

export default withRouter(Login); 