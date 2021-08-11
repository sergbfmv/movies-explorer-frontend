import './SavedMovies.css'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies({ path, handleSaveSubmit, handleChange, errors, listLength, loader, addMovies, handleSave, savingMovies, filtered, handleChecked, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm
        submitForm={handleSaveSubmit}
        handleChange={handleChange}
        errors={errors}
        filter={filtered}
        checked={handleChecked}
      />
      <MoviesCardList
        moviesOnPage={savingMovies}
        listLength={listLength}
        loader={loader}
        addMovies={addMovies}
        page={path}
        onSave={handleSave}
      />
      <Footer />
    </>
  )
}

export default SavedMovies;