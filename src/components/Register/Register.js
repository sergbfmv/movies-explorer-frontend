import './Register.css'
import React from 'react';
import headerLogo from '../../images/header-logo.svg'
import { withRouter, Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister()
  }
    render() {
    return(
      <section className='register'>
        <div className='register__box'>
          <div className='register__heading'>
            <Link to='/'>
              <img src={headerLogo} alt='Логотип сайта' className='logo'/>
            </Link>
            <h2 className='register__title'>Добро пожаловать!</h2>
          </div>
          <form className='register__form' onSubmit={this.handleSubmit}>
            <label className="register__form-field">
              <p className='register__form-text'>Имя</p>
              <input onChange={this.props.handleChange} id="name-input" type="text" name="name" placeholder="Имя" className="register__placeholder register__placeholder_type_name" required/>
              <span className={this.props.errors.name ? "name-input-error register__placeholder-error register__placeholder-error_active" : "name-input-error register__placeholder-error"}>{this.props.errors.name}</span>
            </label>
            <label className="register__form-field">
              <p className='register__form-text'>E-mail</p>
              <input onChange={this.props.handleChange} id="email-input" type="email" name="email" placeholder="Почта" className="register__placeholder register__placeholder_type_email" required/>
              <span className={this.props.errors.email ? "email-input-error register__placeholder-error register__placeholder-error_active" : "email-input-error register__placeholder-error"}>{this.props.errors.email}</span>
            </label>
            <label className="register__form-field">
              <p className='register__form-text'>Пароль</p>
              <input onChange={this.props.handleChange} id="password-input" type="password" name="password" placeholder="Пароль" className="register__placeholder register__placeholder_type_password" required/>
              <span className={this.props.errors.password ? "password-input-error register__placeholder-error register__placeholder-error_active" : "password-input-error register__placeholder-error"}>{this.props.errors.password}</span>
            </label>
            <button type="submit" name="register" className={this.props.errors.name || this.props.errors.email || this.props.errors.password ? "register__button register__button_inactive" : "register__button"}>Зарегистрироваться</button>
            <p className="register__text">Уже зарегистрированы? <Link to='/signin' className="register__link">Войти</Link></p>
          </form>
        </div>
      </section>
  )}
}

export default withRouter (Register);