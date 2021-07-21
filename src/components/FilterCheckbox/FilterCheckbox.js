import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <label className='checkbox__field'>
        <input className='checkbox__form-checkbox' type='checkbox'></input>
        <span className='checkbox__switcher'></span>
      </label>
      <p className='checkbox__paragraph'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;