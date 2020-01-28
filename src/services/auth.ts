// Fake api ----------------------
import { LoginResponseDTO } from '../state/auth/actions'

export const login = ({ login, password }: { login: string, password: string }): Promise<LoginResponseDTO> =>
  new Promise((res, rej) => {
    setTimeout(() => {
      if (login === 'login' && password === 'password') {
        res({
          token: 'super_auth_token',
          access_token: 'super_access_token'
        })
      } else {
        rej('Wrong data')
      }
    }, 1500)
  })






