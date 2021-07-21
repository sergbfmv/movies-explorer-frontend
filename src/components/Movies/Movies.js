import './Movies.css'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer';

function Movies() {
  return (
    <>
      <Header path="/movies" />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </>
  )
}

export default Movies;