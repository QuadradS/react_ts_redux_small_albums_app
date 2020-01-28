import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './app-styles/structure-styles.scss'
import PrivateRoute from './components/common/PrivateRoute/index'
import AlbumsListScene from './scenes/albums-list-scene'
import AuthScene from './scenes/auth-scene'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route component={AuthScene} path={'/auth'} exact/>
        <PrivateRoute c={AlbumsListScene} path={'/'}/>
      </Switch>
    </div>
  )
}

export default App
