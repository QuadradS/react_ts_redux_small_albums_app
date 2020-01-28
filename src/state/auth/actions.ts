import * as loginService from '../../services/auth'
import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS } from './constants'

export interface LoginResponseDTO {
  token: string,
  access_token: string
}

const loginStart = () => ({ type: LOGIN_START })
const loginSuccess = ({ token, access_token }: LoginResponseDTO) => ({
  type: LOGIN_SUCCESS,
  payload: { token, access_token }
})
const loginFail = () => ({ type: LOGIN_FAIL })

export const login = ({ login, password }: { login: string, password: string }) => (dispatch: any) => {
  dispatch(loginStart())
  loginService
    .login({ login, password })
    .then((res: LoginResponseDTO) => {
      dispatch(loginSuccess(res))
      localStorage.setItem('token',res.token)
      localStorage.setItem('access_token',res.access_token)
    })
    .catch(() => dispatch(loginFail()))
}


