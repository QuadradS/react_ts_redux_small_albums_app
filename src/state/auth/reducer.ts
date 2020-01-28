import { DATA_STATUSES, dataStat } from '../../utils'
import * as authConstant from './constants'


const initState: AuthStateType = {
  isAuthorized: true,
  loginStatus: DATA_STATUSES.UN_TOUCHED
}

export interface AuthStateType {
  isAuthorized: boolean
  loginStatus: dataStat
}

export const auth = (state:AuthStateType = initState, action:{type:string, payload?: any}):AuthStateType => {

  switch (action.type) {
    case authConstant.LOGIN_START:
      return({
        ...state,
        loginStatus: DATA_STATUSES.REQUESTING
      })
    case authConstant.LOGIN_SUCCESS:
      return({
        ...state,
        isAuthorized: true,
        loginStatus: DATA_STATUSES.SUCCESS
      })
    case authConstant.LOGIN_FAIL:
      return({
        ...state,
        isAuthorized: false,
        loginStatus: DATA_STATUSES.ERROR
      })
    default:
      return state
  }

}
