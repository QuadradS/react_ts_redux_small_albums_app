import { AlbumPhotoResponseDTO, AlbumResponseDTO } from '../../services/albums'
import { DATA_STATUSES, dataStat } from '../../utils'
import * as albumsConstant from './constants'


const initState: AlbumsStateType = {
  albums: [],
  albumsStatus: DATA_STATUSES.UN_TOUCHED,
  albumPhotos: [],
  albumPhotosStatus: DATA_STATUSES.UN_TOUCHED,
  selectedPhoto: null,
  selectedPhotoStatus:  DATA_STATUSES.UN_TOUCHED,
}

export interface AlbumsStateType {
  albums: AlbumResponseDTO[],
  albumsStatus: dataStat,
  albumPhotos: AlbumPhotoResponseDTO[],
  albumPhotosStatus: dataStat,
  selectedPhoto: AlbumPhotoResponseDTO | null,
  selectedPhotoStatus: dataStat
}

export const albums = (state:AlbumsStateType = initState, action:{type:string, payload?: any}):AlbumsStateType => {

  switch (action.type) {
    case albumsConstant.GET_ALBUMS_START:
      return({
        ...state,
        albumsStatus: DATA_STATUSES.REQUESTING
      })
    case albumsConstant.GET_ALBUMS_SUCCESS:
      return({
        ...state,
        albums: action.payload,
        albumsStatus: DATA_STATUSES.SUCCESS
      })
    case albumsConstant.GET_ALBUMS_FAIL:
      return({
        ...state,
        albumsStatus: DATA_STATUSES.ERROR
      })

    case albumsConstant.GET_ALBUM_PHOTOS_START:
      return({
        ...state,
        albumPhotosStatus: DATA_STATUSES.REQUESTING
      })
    case albumsConstant.GET_ALBUM_PHOTOS_SUCCESS:
      return({
        ...state,
        albumPhotos: action.payload,
        albumPhotosStatus: DATA_STATUSES.SUCCESS
      })
    case albumsConstant.GET_ALBUM_PHOTOS_FAIL:
      return({
        ...state,
        albumPhotosStatus: DATA_STATUSES.ERROR
      })
    case albumsConstant.CLEAR_ALBUM_PHOTOS:
      return({
        ...state,
        albumPhotos: [],
        albumPhotosStatus: DATA_STATUSES.UN_TOUCHED
      })

    case albumsConstant.GET__PHOTO_START:
      return({
        ...state,
        selectedPhotoStatus: DATA_STATUSES.REQUESTING
      })
    case albumsConstant.GET__PHOTO_SUCCESS:
      return({
        ...state,
        selectedPhoto: action.payload,
        selectedPhotoStatus: DATA_STATUSES.SUCCESS
      })
    case albumsConstant.GET__PHOTO_FAIL:
      return({
        ...state,
        selectedPhotoStatus: DATA_STATUSES.ERROR
      })
    case albumsConstant.CLEAR__PHOTO:
      return({
        ...state,
        selectedPhoto: null,
        selectedPhotoStatus: DATA_STATUSES.UN_TOUCHED
      })
    default:
      return state
  }

}
