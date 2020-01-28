import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Store } from '../../app-config/rootReducer'
import styles from '../../scenes/albums-list-scene/style.module.scss'
import { AlbumResponseDTO } from '../../services/albums'
import { getAlbums } from '../../state/albums/actions'
import { DATA_STATUSES, dataStat } from '../../utils'
import AlbumItem from '../AlbumItem'

interface AlbumsListProps {
  albums: AlbumResponseDTO[],
  albumsStatus: dataStat,
  getAlbums: () => void
}

const AlbumsList = ({ albums, albumsStatus, getAlbums }: AlbumsListProps) => {
  useEffect(() => getAlbums(), [])

  if (albumsStatus === DATA_STATUSES.UN_TOUCHED || albumsStatus === DATA_STATUSES.REQUESTING) {
    return <div>Wait</div>
  }

  if (albumsStatus === DATA_STATUSES.ERROR) {
    return <div>Error</div>
  }

  return (
    <div className={styles.albums_list}>
      {albums.map((a: AlbumResponseDTO) => (
        <Link to={`/album/${a.id}`}>
          <AlbumItem album={a} key={a.id}/>
        </Link>
      ))}
    </div>
  )
}

export default connect((store: Store) => ({
  albums: store.albums.albums,
  albumsStatus: store.albums.albumsStatus
}), {
  getAlbums
})(AlbumsList)
