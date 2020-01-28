import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { combineReducers } from 'redux'
import { albums, AlbumsStateType } from '../state/albums/reducer'
import { auth, AuthStateType } from '../state/auth/reducer'


const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
    albums
  })

export interface Store {
  router: RouterState;
  auth: AuthStateType;
  albums: AlbumsStateType
}

export default createRootReducer
