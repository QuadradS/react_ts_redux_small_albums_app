import React from 'react'
import { Link } from 'react-router-dom'
import { AlbumPhotoResponseDTO } from '../../services/albums'
import styles from './style.module.scss'

const AlbumPhoto = ({ albumPhoto, handleClick, selected }: { albumPhoto: AlbumPhotoResponseDTO, handleClick: () => void, selected: boolean }) => {

  return (
    <div className={styles.container} onClick={handleClick}>
      <Link to={`/photo/${albumPhoto.id}`} className={styles.container__img} style={{ backgroundImage: `url(${albumPhoto.url})` }}/>
      <button onClick={handleClick}>{selected ? 'Selected' : 'Select'}</button>
    </div>
  )
}

export default AlbumPhoto
