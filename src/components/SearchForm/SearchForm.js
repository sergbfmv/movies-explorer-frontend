import './SearchForm.css'
import searchLogo from '../../images/search.svg'
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__box'>
        <form className='search-form__form' name='search'>
          <div className='search-form__contain'>
            <img src={searchLogo} className='search-form__image' alt='Картинка поиска'></img>
            <label className='search-form__field'>
              <input className='search-form__placeholder' id="movies-search" type="text" name="search" placeholder="Фильм" />
              <span className="email-input-error search-form__placeholder-error"></span>
            </label>
            <button type='button' className='search-form__button'>Найти</button>
          </div>
          <FilterCheckbox />
        </form>
      </div>
    </section>
  )
}

export default SearchForm;