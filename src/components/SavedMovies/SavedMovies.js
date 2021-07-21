import './SavedMovies.css'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies(props) {
  return (
    <>
      <Header path="/saved-movies" />
      <SearchForm />
      <MoviesCardList path='/saved-movies' link={props.path} />
      <Footer />
    </>
  )
}

export default SavedMovies;