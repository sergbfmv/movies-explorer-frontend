import './Movies.css'
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Footer from '../Footer/Footer';
import React from 'react';

function Movies({ path, handleSubmit, data, handleChange, errors, listLength, loader, addMovies, handleSave, savedMovies, filtered, handleChecked, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <SearchForm 
        submitForm={handleSubmit}
        handleChange={handleChange}
        errors={errors}
        filter={filtered}
        checked={handleChecked}
      />
      <MoviesCardList
        moviesOnPage={data}
        listLength={listLength}
        loader={loader}
        addMovies={addMovies}
        page={path}
        onSave={handleSave}
        saved={savedMovies}
      />
      <Footer />
    </>
  )
}

export default Movies;