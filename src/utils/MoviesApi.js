export class Api {
  constructor(options) {
    this.url = options.baseUrl
    this.headers = options.headers
  }

  _checkStatus(res) {
    if(res.ok) {
      return res.json()
    }

    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(this.url, {
      headers: this.headers,
    })
    .then(res => 
      this._checkStatus(res)
    )
  }
}

const api = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api