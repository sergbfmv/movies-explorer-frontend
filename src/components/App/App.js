import './App.css';
import '../../vendor/normalize.css'
import '../../vendor/fonts/fonts.css'
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <div className="page">
      <main className="main">
        <Switch>
          <Route  exact path='/'>
            <Main path='/'/>
          </Route>
          <Route path='/signin'>
            <Login />
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/saved-movies'>
            <SavedMovies path='/saved-movies' />
          </Route>
          <Route path='/movies'>
            <Movies path='/movies'/>
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
