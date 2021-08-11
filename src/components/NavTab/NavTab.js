import './NavTab.css'

function NavTab(props) {
  return(
    <div className='nav-tab'>
      <div className='nav-tab__buttons'>
        <a href='#about' className='nav-tab__button'>О проекте</a>
        <a href='#techs' className='nav-tab__button'>Технологии</a>
        <a href='#student' className='nav-tab__button'>Студент</a>
      </div>
    </div>
  )
}

export default NavTab;