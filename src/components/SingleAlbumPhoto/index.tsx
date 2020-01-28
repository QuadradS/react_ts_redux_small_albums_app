import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { Store } from '../../app-config/rootReducer'
import { AlbumPhotoResponseDTO } from '../../services/albums'
import { clearPhoto, getPhoto } from '../../state/albums/actions'
import { DATA_STATUSES, dataStat } from '../../utils'
import { ReactComponent as BackIcon } from '../common/icons/back-icon.svg'
import styles from './style.module.scss'

interface SingleAlbumPhotoProps extends RouteComponentProps<{ id: string }> {
  photo: AlbumPhotoResponseDTO | null,
  photoStatus: dataStat,
  getPhoto: (photoID: string) => void,
  clearPhoto: () => void
}

const SingleAlbumPhoto = ({ photo, photoStatus, getPhoto, clearPhoto, match }: SingleAlbumPhotoProps) => {
  useEffect(() => {
    getPhoto(match.params.id)
    return clearPhoto
  }, [match.params.id])

  if (photoStatus === DATA_STATUSES.UN_TOUCHED || photoStatus === DATA_STATUSES.REQUESTING) {
    return <div>Wait</div>
  }

  if (photoStatus === DATA_STATUSES.ERROR) {
    return <div>ERROR :-(</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.icon_block}>
       <Link to={`/album/${photo!.albumID}`}>
         <BackIcon className={styles.icon_block__back}/>
       </Link>
        <div className={styles.icon_block__content}>
          <p>
            Company Album
          </p>
        </div>
      </div>
      <img className={styles.container__photo}
           src={photo!.url} alt=""/>
      <div className={styles.container__row}>
        <p>File name</p>
        <p>{photo!.filename}</p>
      </div>
      <div className={styles.container__row}>
        <p>Object name</p>
        <p>{photo!.ownerName}</p>
      </div>
      <div className={styles.container__row}>
        <p>Caption</p>
        <p>{photo!.description}</p>

      </div>
      <div className={styles.container__row}>
        <p>Keywords</p>
        {photo!.keywords.split(' ').map((kw: string) => <p>{kw}</p>)}
      </div>
    </div>
  )
}

export default connect((store: Store) => ({
  photo: store.albums.selectedPhoto,
  photoStatus: store.albums.selectedPhotoStatus
}), { getPhoto, clearPhoto })(SingleAlbumPhoto)
