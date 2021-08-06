import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import Preloader from '../Preloader/Preloader'

function MoviesCardList({ moviesOnPage, listLength, loader, addMovies, page, onSave, saved }) {

  const buttonClass = `movies__button hover ${ listLength >= moviesOnPage.length ? 'movies__button_disabled' : '' }`;
  const className = `movies__not-found ${moviesOnPage.length === 0 ? 'movies__not-found_active': ''}`

  return (
    <>
    {page === '/movies' ? (
      <section className='movies'>
        <div className='movies__box'>
          <Preloader loader={loader}></Preloader>
          <div className='movies__grid'>
            {moviesOnPage.map((item) => {
              return (
                <MoviesCard
                  item={item}
                  key={item.id}
                  page={page}
                  save={onSave}
                  like={saved.some((i) => {
                    return i.movieId === item.id
                  })}
                />
              )
            }).slice(0, listLength)}
          </div>
          <p className={className}>Ничего не найдено</p>
          <section className='movies__button-box'>
              <button type='button' className={buttonClass} onClick={addMovies}>Ещё</button>
          </section>
        </div>
      </section>
    ) : (
      <section className='movies'>
        <div className='movies__box'>
          <Preloader loader={loader}></Preloader>
          <div className='movies__grid'>
            {moviesOnPage.map((item) => {
              return (
                <MoviesCard
                  item={item}
                  key={item._id}
                  page={page}
                  save={onSave}
                />
              )
            }).slice(0, listLength)}
          </div>
          <p className={className}>Ничего не найдено</p>
          <section className='movies__button-box'>
              <button type='button' className={buttonClass} onClick={addMovies}>Ещё</button>
          </section>
        </div>
      </section>
    )}
    </>
)}

export default MoviesCardList