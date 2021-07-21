import './Profile.css'
import Header from "../Header/Header";

function Profile(props) {
  return(
    <>
    <Header />
    <section className='profile'>
      <div className='profile__box'>
        <h2 className='profile__title'>Привет, Сергей!</h2>
        <form className='profile__form'>
          <label className="profile__form-field">
            <p className='profile__form-text'>Имя</p>
            <input disabled id="name-input" type="text" name="name" placeholder="Сергей" className="profile__placeholder profile__placeholder_type_name"/>
            <span className="name-input-error popup__placeholder-error"></span>
          </label>
          <label className="profile__form-field">
            <p className='profile__form-text'>Почта</p>
            <input disabled id="email-input" type="email" name="email" placeholder="test@mail.ru" className="profile__placeholder profile__placeholder_type_name"/>
            <span className="name-input-error popup__placeholder-error"></span>
          </label>
        </form>
        <button type='button' to='/' className='profile__edit-button'>Редактировать</button>
        <button type='button' className='profile__logout-button'>Выйти из аккаунта</button>
      </div>
    </section>
    </>
)}

export default Profile;