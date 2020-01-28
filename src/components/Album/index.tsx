import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Store } from '../../app-config/rootReducer'
import { AlbumPhotoResponseDTO } from '../../services/albums'
import { clearAlbumPhotos, getAlbumsPhotos } from '../../state/albums/actions'
import { DATA_STATUSES, dataStat } from '../../utils'
import AlbumPhoto from '../AlbumPhoto'
import { ReactComponent as BackIcon } from '../common/icons/back-icon.svg'
import { ReactComponent as FolderIcon } from '../common/icons/folder-icon.svg'
import styles from './style.module.scss'

interface AlbumProps extends RouteComponentProps<{ id: string }> {
  albumPhotos: AlbumPhotoResponseDTO[],
  albumPhotosStatus: dataStat,
  getAlbumsPhotos: (albumID: string) => void,
  clearAlbumPhotos: () => void
}

const Album = ({ albumPhotos, albumPhotosStatus, getAlbumsPhotos, match, clearAlbumPhotos }: AlbumProps) => {
  useEffect(() => {
    getAlbumsPhotos(match.params.id)
    return clearAlbumPhotos
  }, [])

  const [isOpen, toggle] = useState(true)
  const handleToggle = () => toggle(!isOpen)

  const [selectedPhotos, setSelected]:[string[], (ids: string[]) => void] = useState([''])
  const handleSelect = (id: string) => () => {
    if (selectedPhotos.find((sID: string) => sID === id)) {
      setSelected(selectedPhotos.filter((sID: string) => sID !== id))
    } else {
      setSelected([id, ...selectedPhotos])
    }
  }

  if (albumPhotosStatus === DATA_STATUSES.UN_TOUCHED || albumPhotosStatus === DATA_STATUSES.REQUESTING) {
    return <div>Wait</div>
  }

  return (
    <div className={styles.container}>

      <div className={styles.icon_block}>
        <Link to={'/'}>
          <BackIcon className={styles.icon_block__back}/>
        </Link>
        <div className={styles.icon_block__content} onClick={handleToggle}>
          <FolderIcon className={styles.folder_icon}/>
          <p>Company Album</p>
        </div>
      </div>

      <div className={styles.container__list} style={{ display: isOpen ? 'flex' : 'none' }}>
        {albumPhotos.map((ph: AlbumPhotoResponseDTO) => (
          <div id={ph.id} className={styles.container__item_photo}>
            <AlbumPhoto handleClick={handleSelect(ph.id)} selected={selectedPhotos.some((sPH:string) => sPH === ph.id)} albumPhoto={ph}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default connect((store: Store) => ({
  albumPhotos: store.albums.albumPhotos,
  albumPhotosStatus: store.albums.albumPhotosStatus
}), {
  getAlbumsPhotos,
  clearAlbumPhotos
})(Album)
