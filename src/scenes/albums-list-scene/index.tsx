import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router'
import Album from '../../components/Album'
import AlbumsList from '../../components/AlbumsList'
import Container from '../../components/common/Container'
import SingleAlbumPhoto from '../../components/SingleAlbumPhoto'
import Tabs from '../../components/Tabs'
import UploadPhoto from '../../components/UploadPhoto'
import styles from './style.module.scss'

interface AlbumsListSceneProps extends RouteComponentProps {

}

const AlbumsListScene = ({ match }: AlbumsListSceneProps) => {
  return (
    <Container maxWidth={1024}>
      <div className={styles.container}>
        <Tabs/>

        <h3 className={styles.container__title}>
          Welcome Mila
        </h3>

        <Switch>
          <Route path={match.path} exact component={AlbumsList}/>
          <Route path={`${match.path}album/:id`} component={Album}/>
          <Route path={`${match.path}photo/:id`} component={SingleAlbumPhoto}/>
          <Route path={`${match.path}upload`} component={UploadPhoto}/>
        </Switch>

      </div>
    </Container>
  )
}

export default AlbumsListScene
