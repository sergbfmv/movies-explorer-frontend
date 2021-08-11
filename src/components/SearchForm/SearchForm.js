import './SearchForm.css'
import React from 'react';
import searchLogo from '../../images/search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ submitForm, handleChange, errors, filter, checked }) {
  return (
    <section className='search-form'>
      <div className='search-form__box'>
        <form className='search-form__form' name='search' onSubmit={submitForm} noValidate>
          <div className='search-form__contain'>
            <img src={searchLogo} className='search-form__image' alt='Картинка поиска'></img>
            <label className='search-form__field'>
              <input onChange={handleChange} className='search-form__placeholder' id="movies-search" type="text" name="search" placeholder="Фильм" required/>
              <span className={errors.search ? ("email-input-error search-form__placeholder-error search-form__placeholder-error_active") : ("email-input-error search-form__placeholder-error")}>{errors.search}</span>
            </label>
            <button type='submit' className='search-form__button'>Найти</button>
          </div>
          <FilterCheckbox
            filter={filter}
            checked={checked}
           />
        </form>
      </div>
    </section>
  )
}

export default SearchForm;