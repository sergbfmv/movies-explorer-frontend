import './PageNotFound.css'
import { Link } from 'react-router-dom';

function PageNotFound(props) {
  return(
    <section className='not-found'>
      <div className='not-found__box'>
          <h2 className='not-found__title'>404</h2>
          <p className='not-found__text'>Страница не найдена</p>
          <Link to='/' className='not-found__link'>Назад</Link>
      </div>
    </section>
)}

export default PageNotFound;