import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor() {
    this._isAuth = false
    this._user = {}
    makeAutoObservable(this)
  }

  setAuth(bool) {
    const isAuth = localStorage.getItem('isAuth')
    if (isAuth || isAuth === bool) {
      this._isAuth = isAuth
    } else {
      this._isAuth = bool
      localStorage.setItem('isAuth', bool)
    }
  }

  setUser(user) {
    this._user = user
  }

  get isAuth() {
    return this._isAuth
  }

  get user() {
    return this._user
  }
}
