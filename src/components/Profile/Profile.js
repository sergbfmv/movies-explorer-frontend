import './Profile.css'
import Header from "../Header/Header";

function Profile({name, email, onLogout, onChange, onSubmit, loggedIn, errors}) {

  return(
    <>
    <Header loggedIn={loggedIn} />
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>Привет, {name}!</h2>
        <form className='profile__form' onSubmit={onSubmit}>
          <label className="profile__form-field">
            <p className='profile__form-text'>Имя</p>
            <input onChange={onChange} id="name-input" type="text" name="name" placeholder={name} className="profile__placeholder profile__placeholder_type_name"/>
            <span className={errors.name ? "name-input-error profile__placeholder-error profile__placeholder-error_active" : "name-input-error profile__placeholder-error"}>{errors.name}</span>
          </label>
          <label className="profile__form-field">
            <p className='profile__form-text'>Почта</p>
            <input onChange={onChange} id="email-input" type="email" name="email" placeholder={email} className="profile__placeholder profile__placeholder_type_name"/>
            <span className={errors.email ? "name-input-error profile__placeholder-error profile__placeholder-error_active" : "name-input-error profile__placeholder-error"}>{errors.email}</span>
          </label>
          <button type='submit' className='profile__edit-button'>Редактировать</button>
        </form>
        <button onClick={onLogout} type='button' className='profile__logout-button'>Выйти из аккаунта</button>
      </div>
    </section>
    </>
)}

export default Profile;