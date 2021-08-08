import './App.css';
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import InfoTooltip from '../InfoToolTip/InfoToolTip';
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound';
import React from 'react';
import api from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import regOk from '../../images/regOk.svg'
import regNotOk from '../../images/regNotOk.svg'
import Constants from '../../utils/Constants'

function App() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [localMovies, setLocalMovies] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [moviesNumber, setMoviesNumber] = React.useState(0);
  const [listLength, setListLength] = React.useState(0);
  const [loader, setLoader] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);
  const [serverError, setServerError] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const history = useHistory()
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false)
  const [messageInfoTooltip, setMessageInfoTooltip] = React.useState('')
  const [imageInfoTooltip, setImageInfoTooltip] = React.useState('')
  const [userData, setUserData] = React.useState({});

  function handleSearch(e) {
    e.preventDefault()
    if (values.search === '' || values.search === undefined) {
      setIsValid(false)
      setErrors({...errors, search: 'Нужно ввести ключевое слово'})
    } else {
      setIsValid(true)
    }
    if (isValid) {
      setLoader(true)
      defineListLength()
      const filteredMovies = []
      const movie = values.search.toLowerCase()
      if (/[а-я]/i.test(movie)) {
        localMovies.forEach((item) => {
          if (item.nameRU !== null || '') {
            if (item.nameRU.toLowerCase().includes(movie)) {
              filteredMovies.push(item)
            }
          } 
        })
      } else if (/[a-z]/i.test(movie)) {
        localMovies.forEach((item) => {
          if (item.nameEN !== null || '') {
            if (item.nameEN.toLowerCase().includes(movie)) {
              filteredMovies.push(item)
            }
          }
        })
      }
      localStorage.setItem('filtered', JSON.stringify(filteredMovies))
      setData(filteredMovies)
      setLoader(false)
    } else {
      setIsValid(false)
    }
  }

  function handleSavedSearch(e) {
    e.preventDefault()
    if (values.search === '' || values.search === undefined) {
      setIsValid(false)
      setErrors({...errors, search: 'Нужно ввести ключевое слово'})
    } else {
      setIsValid(true)
    }
    if (isValid) {
      setLoader(true)
      defineListLength()
      const filteredMovies = []
      const movie = values.search.toLowerCase()
      if (/[а-я]/i.test(movie)) {
        savedMovies.forEach((item) => {
          if (item.nameRU !== null || '') {
            if (item.nameRU.toLowerCase().includes(movie)) {
              filteredMovies.push(item)
            }
          } 
        })
      } else if (/[a-z]/i.test(movie)) {
        savedMovies.forEach((item) => {
          if (item.nameEN !== null || '') {
            if (item.nameEN.toLowerCase().includes(movie)) {
              filteredMovies.push(item)
            }
          }
        })
      }
      localStorage.setItem('saved', JSON.stringify(filteredMovies))
      setSavedMovies(filteredMovies)
      setLoader(false)
    } else {
      setIsValid(false)
    }
  }

  const durationFilter = () => {
    if (!checked) {
      const shorts = data.filter((item) => item.duration <= Constants.Duration);
      setChecked(true);
      setData(shorts);
    } else {
      setChecked(false);
      const prevState = JSON.parse(localStorage.getItem('filtered'));
      setData(prevState);
    }
  };

  const savedDurationFilter = () => {
    if (!checked) {
      const shorts = savedMovies.filter((item) => item.duration <= Constants.Duration);
      setChecked(true);
      setSavedMovies(shorts);
    } else {
      setChecked(false);
      const prevState = JSON.parse(localStorage.getItem('saved'));
      setSavedMovies(prevState);
    }
  };

  const handleLike = (movie) => {
    const like = savedMovies.some((i) =>
      i.movieId === movie.id ? true : false
    );
    if (!like) {
      mainApi.createMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailer: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
          movieId: movie.id,
        })
        .then(() => {
          getMovies();
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      savedMovies.some((i) =>
        i.movieId === movie.id
          ? mainApi
              .deleteMovie(i._id)
              .then(() => {
                getMovies();
              })
              .catch((err) => {
                console.log(err);
              })
          : ''
      );
    }
  };

  const handleDeleteLike = (movie) => {
    const like = savedMovies.some((i) =>
      i.movieId === movie.movieId ? true : false
    );
    if (!like) {
      mainApi.createMovie({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          trailer: movie.trailerLink,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
          movieId: movie.id,
        })
        .then(() => {
          getMovies();
        })

        .catch((err) => {
          console.log(err);
        });
    } else {
      mainApi.deleteMovie(movie._id)
        .then((res) => {
          getMovies();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  const handleError = (message) => {
    setErrorVisible(true);
    setServerError(message);
  };

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const getMovies = () => {
    mainApi.getMovies()
      .then((res) => {
        const films = res.data;
        localStorage.setItem('saved', JSON.stringify(films));
        const savedMovies = JSON.parse(localStorage.getItem('saved'));
        setSavedMovies(savedMovies);
      })

      .catch((err) => console.log(err));
  };

  const defineListLength = () => {
    const screenWith = document.documentElement.clientWidth;
    if (screenWith > 1140) {
      setMoviesNumber(Constants.MoviesNumberWidth);
      setListLength(Constants.ListLengthWidth);
    } else if (screenWith >= 768 && screenWith <= 1140) {
      setMoviesNumber(Constants.MoviesNumberMedium);
      setListLength(Constants.ListLengthMedium);
    } else if (screenWith < 768) {
      setMoviesNumber(Constants.MoviesNumberSmall);
      setListLength(Constants.ListLengthSmall);
    }
  };

  const addMovies = () => {
    setListLength(listLength + moviesNumber);
  };

  function handleLogin() {
    setLoggedIn(true)
  }

  function handleTokenCheck () {
    if (!localStorage.getItem('jwt')) {
      setLoggedIn(false)
    } else {
      const jwt = localStorage.getItem('jwt');
      if (jwt) {
        mainApi.getUser()
          .then((info) => {
            const userData = {
              name: info.data.name,
              email: info.data.email
            }
            setUserData(userData)
            setLoggedIn(true)
          })
          .catch((err) => {
            console.log(err);
          });
    }}
  }

  function handleOnLogin () {
    setLoader(true)
    mainApi.login(values.email, values.password)
      .then((data) => {
        if (data.token) {
          handleLogin();
          history.push('/movies');
        }
      })
      .catch((err) => {
        setLoggedIn(false)
        console.log(err)
      })
      .finally(() => {
        setLoader(false)
      })
}

  const logout = () => {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/')
  };

  function handleInfoTooltipOpen(message, image) {
    setIsInfoTooltipOpen(true)
    setMessageInfoTooltip(message)
    setImageInfoTooltip(image)
  }

  function handleInfoTooltipClose() {
    const check = imageInfoTooltip
    setIsInfoTooltipOpen(false)
    setMessageInfoTooltip('')
    setImageInfoTooltip('')
  }

  function handleRegister () {
    setLoader(true)
    mainApi.register(values.name, values.email, values.password)
      .then((res) => {
        if(!res.error && !res.message) {
          mainApi.login(values.email, values.password)
            .then((data) => {
              if (data.token) {
                setLoggedIn(true)
                history.push('/movies');
              }
    })
            .catch((err) => {
              setLoggedIn(false)
              console.log(err)
            });
        } else {
          handleInfoTooltipOpen('Что-то пошло не так! Попробуйте ещё раз.', regNotOk)
        }
    })
    .catch(err => console.log(err))
    .finally(() => {
      setLoader(false)
    })
  }

  const handleChangeUser = (e) => {
    e.preventDefault();
    if (isValid === true) {
      mainApi.updateUser(values.name, values.email)
        .then((res) => {
          if (!res.message) {
            setValues({ name: res.name, email: res.email });
            const newUserData = {
              name: res.data.name,
              email: res.data.email
            }
            setUserData(newUserData)
            handleInfoTooltipOpen('Данные обновлены!', regOk)
          } else {
            handleError(res.message);
          }
        })
        .catch(err => console.log(err));
    } else {
      setIsValid(false);
    }
  };

  function backButton() {
    history.goBack()
  }

  React.useEffect(() => {
    handleTokenCheck()
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('data')) {
      const allMovies = JSON.parse(localStorage.getItem('data'));
      console.log(allMovies)
      setLocalMovies(allMovies);
    } else {
      api.getMovies()
      .then((res) => {
        localStorage.setItem('data', JSON.stringify(res));
        const allMovies = JSON.parse(localStorage.getItem('data'));
        setLocalMovies(allMovies);
      })
      .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    const filteredMovies = JSON.parse(localStorage.getItem('filtered'));
    if (filteredMovies) {
      setData(filteredMovies);
    } else {
      setData([]);
    }
  }, []);

  React.useEffect(() => {
    defineListLength();
    window.addEventListener('resize', defineListLength);
    window.addEventListener('hashchange', resetForm);
    return () => {
      window.removeEventListener('resize', defineListLength);
      window.removeEventListener('hashchange', resetForm);
    };
  }, []);

  React.useEffect(() => {
    const savingMovies = JSON.parse(localStorage.getItem('saved'));
    if (savingMovies) {
      setSavedMovies(savingMovies);
    } else {
      setSavedMovies([]);
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={userData}>
      <div className="page">
        <main className="main">
          <Switch>
            <ProtectedRoute
              loggedIn={loggedIn}
              path='/profile'
              component={Profile}
              onChange={handleChange}
              onSubmit={handleChangeUser}
              onLogout={logout}
              errors={errors}
              serverError={serverError}
              isValid={isValid}
              name={userData.name}
              email={userData.email}
              loader={loader}
              values={values}
            />
            <ProtectedRoute
              loggedIn={loggedIn} 
              path='/saved-movies'
              component={SavedMovies}
              handleSaveSubmit={handleSavedSearch}
              handleChange={handleChange}
              errors={errors}
              listLength={listLength}
              loader={loader}
              addMovies={addMovies}
              handleSave={handleDeleteLike}
              savingMovies={savedMovies}
              filtered={savedDurationFilter}
              handleChecked={checked}
            />
            <ProtectedRoute
              loggedIn={loggedIn}
              path='/movies'
              component={Movies}
              handleSubmit={handleSearch}
              data={data}
              handleChange={handleChange}
              errors={errors}
              listLength={listLength}
              loader={loader}
              addMovies={addMovies}
              handleSave={handleLike}
              savedMovies={savedMovies}
              filtered={durationFilter}
              handleChecked={checked}
            />
            <Route  exact path='/'>
              <Main loggedIn={loggedIn} path='/'/>
            </Route>
            <Route path='/signin'>
              <Login 
                handleLogin = {handleOnLogin}
                errors={errors}
                handleChange={handleChange}
                loader={loader}
                isValid={isValid}
              />
            </Route>
            <Route path="/signup">
              <Register 
                onRegister={handleRegister}
                errors={errors}
                handleChange={handleChange}
                loader={loader}
                isValid={isValid}
              />
            </Route>
            <Route path='*'>
              <PageNotFound backButton={backButton} />
            </Route>
          </Switch>
          <InfoTooltip 
              isOpen={isInfoTooltipOpen} 
              image={imageInfoTooltip} 
              text={messageInfoTooltip} 
              onClose={handleInfoTooltipClose} 
          />
        </main>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
