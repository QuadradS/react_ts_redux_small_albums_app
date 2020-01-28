import * as albumsService from '../../services/albums'
import { AlbumPhotoResponseDTO, AlbumResponseDTO } from '../../services/albums'
import * as albumsConstants from './constants'

const getAlbumsStart = () => ({ type: albumsConstants.GET_ALBUMS_START })
const getAlbumsSuccess = (albums: AlbumResponseDTO[]) => ({
  type: albumsConstants.GET_ALBUMS_SUCCESS, payload: albums
})
const getAlbumsFail = () => ({ type: albumsConstants.GET_ALBUMS_FAIL })
export const getAlbums = () => (dispatch: any) => {
  dispatch(getAlbumsStart())
  albumsService
    .getAllAlbums()
    .then((res: AlbumResponseDTO[]) => dispatch(getAlbumsSuccess(res)))
    .catch(() => dispatch(getAlbumsFail()))
}

const getAlbumPhotosStart = () => ({ type: albumsConstants.GET_ALBUM_PHOTOS_START })
const getAlbumPhotosSuccess = (albums: AlbumPhotoResponseDTO[]) => ({
  type: albumsConstants.GET_ALBUM_PHOTOS_SUCCESS, payload: albums
})
const getAlbumPhotosFail = () => ({ type: albumsConstants.GET_ALBUM_PHOTOS_FAIL })
export const getAlbumsPhotos = (albumID: string) => (dispatch: any) => {
  dispatch(getAlbumPhotosStart())
  albumsService
    .getAlbumPhotos(albumID)
    .then((res: AlbumPhotoResponseDTO[]) => dispatch(getAlbumPhotosSuccess(res)))
    .catch(() => dispatch(getAlbumPhotosFail()))
}

export const clearAlbumPhotos = () => ({ type: albumsConstants.CLEAR_ALBUM_PHOTOS })

const getPhotoStart = () => ({ type: albumsConstants.GET__PHOTO_START })
const getPhotoSuccess = (photo: AlbumPhotoResponseDTO) => ({
  type: albumsConstants.GET__PHOTO_SUCCESS, payload: photo
})
const getPhotoFail = () => ({ type: albumsConstants.GET__PHOTO_FAIL })
export const getPhoto = (photoID: string) => (dispatch: any) => {
  dispatch(getPhotoStart())
  albumsService
    .getPhoto(photoID)
    .then((res: AlbumPhotoResponseDTO) => dispatch(getPhotoSuccess(res)))
    .catch(() => dispatch(getPhotoFail()))
}

export const clearPhoto = () => ({ type: albumsConstants.CLEAR__PHOTO })




