class Api {
  constructor(options) {
    this._options = options;
    this._headers = options.headers;
    this._baseUrl = options.baseUrl;
  }
  register = (name, email, password) => {
    return fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      })
      .catch((err) => console.log(err));
  };

  login = (email, password) => {
    return fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res) {
          console.log(res.token)
          localStorage.setItem('jwt', res.token);
          return res;
        }
      })
      .catch((err) => console.log(err));
  };

  getUser = () => {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      })

      .catch((err) => console.log(err));
  };

  updateUser = (name, email) => {
    return fetch(`${this._baseUrl}users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({ name, email }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        return res;
      });
  };

  createMovie = ({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    thumbnail,
    nameRU,
    nameEN,
    movieId,
  }) => {
    return fetch(`${this._baseUrl}movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        thumbnail,
        nameRU,
        nameEN,
        movieId,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };

  getMovies = () => {
    return fetch(`${this._baseUrl}movies`, {
      headers: this._headers,
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };

  deleteMovie = (id) => {
    return fetch(`${this._baseUrl}movies/${id}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => {
        if (res) {
          return res;
        }
      })
      .catch((err) => console.log(err));
  };
}

const mainApi = new Api({
  baseUrl: 'https://api.serg-movies.diploma.nomoredomains.monster/',
  headers: {
    'authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});
export default mainApi;