import React from 'react'
import { AlbumResponseDTO } from '../../services/albums'
import styles from './style.module.scss'

const AlbumItem = ({album}:{album: AlbumResponseDTO}) => {
  return(
    <div className={styles.list_item}>
      <img className={styles.list_item__logo} src={album.albumPreview} alt=""/>
      <div className={styles.list_item__info}>
        <p className={styles.list_item__name}>{album.name}</p>
        <p className={styles.list_item__count}>{album.countPhoto} files</p>
        <p className={styles.list_item__lo}>{2}</p>
      </div>
    </div>
  )
}

export default AlbumItem
