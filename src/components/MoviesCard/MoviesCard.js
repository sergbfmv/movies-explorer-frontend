import '../MoviesCard/MoviesCard.css'

function MoviesCard({ item, page, save, like, }) {
  const likeClass = `card__fav-button ${like ? 'card__fav-button_active' : ''}`;

  function saveMovie() {
    save(item)
  }

    return (
      <>
      {page === '/movies' ? (
        <div className='card'>
          <div className='card__box'>
            <div className='card__element'>
              <div className='card__header'>
                <div className='card__text'>
                  <h2 className='card__title'>{item.nameRU}</h2>
                  <p className='card__time'>{(item.duration / 60 | 0)  + 'ч ' + item.duration % 60 + 'мин'}</p>
                </div>
                {page === '/saved-movies' ? (
                  <button type='button' className='card__remove-button'></button>
                ) : (
                  <button onClick={saveMovie} type='button' className={likeClass}></button>
                )}
              </div>
              <a href={item.trailerLink} target='_blank' rel="noreferrer">
                <div className='card__image' style={{ backgroundImage: `url(${'https://api.nomoreparties.co' + item.image.url})`}}>
                </div>
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className='card'>
          <div className='card__box'>
            <div className='card__element'>
              <div className='card__header'>
                <div className='card__text'>
                  <h2 className='card__title'>{item.nameRU}</h2>
                  <p className='card__time'>{(item.duration / 60 | 0)  + 'ч ' + item.duration % 60 + 'мин'}</p>
                </div>
                {page === '/saved-movies' ? (
                  <button onClick={saveMovie} type='button' className='card__remove-button'></button>
                ) : (
                  <button onClick={saveMovie} type='button' className={likeClass}></button>
                )}
              </div>
              <a href={item.trailer} target='_blank' rel="noreferrer">
                <div className='card__image' style={{ backgroundImage: `url(${item.image})`}}>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
      </>
    );
}

export default MoviesCard;