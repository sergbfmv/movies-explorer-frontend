import '../MoviesCard/MoviesCard.css'
import moviePicture from '../../images/movie.png'

function MoviesCard(props) {
    return(
      <section className='card'>
        <div className='card__box'>
          <div className='card__element'>
            <div className='card__header'>
              <div className='card__text'>
                <h2 className='card__title'>33 слова о дизайне</h2>
                <p className='card__time'>1ч 47м</p>
              </div>
              {props.link === '/saved-movies' ? (
                <button type='button' className='card__remove-button'></button>
              ) : (
                <button type='button' className='card__fav-button'></button>
              )}
            </div>
            <img className='card__image' src={moviePicture} alt='Обложка фильма'></img>
          </div>
        </div>
      </section>
)}

export default MoviesCard;