import './Profile.css'
import Header from "../Header/Header";
import React from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({name, email, onLogout, onChange, onSubmit, loggedIn, errors, isValid, values}) {
  const value = React.useContext(CurrentUserContext)
  return(
    <>
    {console.log(value)}
    {console.log(name)}
    <Header loggedIn={loggedIn} />
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>Привет, {value.name}!</h2>
        <form className='profile__form' onSubmit={onSubmit}>
          <label className="profile__form-field">
            <p className='profile__form-text'>Имя</p>
            <input onChange={onChange} id="name-input" type="text" name="name" placeholder={value.name} className="profile__placeholder profile__placeholder_type_name" required/>
            <span className={errors.name ? "name-input-error profile__placeholder-error profile__placeholder-error_active" : "name-input-error profile__placeholder-error"}>{errors.name}</span>
          </label>
          <label className="profile__form-field">
            <p className='profile__form-text'>Почта</p>
            <input onChange={onChange} id="email-input" type="email" name="email" placeholder={value.email} className="profile__placeholder profile__placeholder_type_name" required/>
            <span className={errors.email ? "name-input-error profile__placeholder-error profile__placeholder-error_active" : "name-input-error profile__placeholder-error"}>{errors.email}</span>
          </label>
          {console.log(isValid)}
          <button type='submit' className={isValid && (values.name !== name && values.email !== email) ? 'profile__edit-button' : 'profile__edit-button profile__edit-button_inactive'}>Редактировать</button>
        </form>
        <button onClick={onLogout} type='button' className='profile__logout-button'>Выйти из аккаунта</button>
      </div>
    </section>
    </>
)}

export default Profile;