import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList(props) {
  return(
    <section className='movies'>
      <div className='movies__box'>
        <div className='movies__grid'>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
          <MoviesCard link={props.path}/>
        </div>
        {/*<Preloader />*/}
        <section className='movies__button-box'>
          {props.link === '/saved-movies' ? (
            <></>
          ) : (
            <button type='button' className='movies__button'>Ещё</button>
          )}
        </section>
      </div>
    </section>
)}

export default MoviesCardList