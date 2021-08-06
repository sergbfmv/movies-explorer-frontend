import './FilterCheckbox.css'

function FilterCheckbox({ filter, checked }) {
  return (
    <div className='checkbox'>
      <label className='checkbox__field'>
        <input className='checkbox__form-checkbox' type='checkbox' onChange={filter} checked={checked}></input>
        <span className='checkbox__switcher'></span>
      </label>
      <p className='checkbox__paragraph'>Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;