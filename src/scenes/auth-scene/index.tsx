import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect, RouteProps } from 'react-router'
import { Store } from '../../app-config/rootReducer'
import Button from '../../components/common/Button'
import Container from '../../components/common/Container'
import TextField from '../../components/common/TextField'
import { login } from '../../state/auth/actions'
import { DATA_STATUSES, dataStat } from '../../utils'
import styles from './style.module.scss'

interface AuthSceneProps extends RouteProps {
  loginAction: ({ login, password }: { login: string, password: string }) => void
  isAuthorized: boolean,
  loginStatus: dataStat
}

const AuthScene = ({ loginAction, isAuthorized, loginStatus }: AuthSceneProps) => {
  const [error, setError] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onChangeLogin = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value), [login])
  const onChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), [password])
  const onSubmit = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (login && password) {
      loginAction({ login, password })
      setError('')
    } else {
      setError('Check values!')
    }
  }, [login, password])
  if (isAuthorized) {
    return <Redirect to={'/'}/>
  }

  return (
    <Container maxWidth={1024}>
      <div className={styles.scene_wrap}>
        <form onSubmit={onSubmit} className={styles.container}>
          <h3 className={styles.container__title}>Login</h3>
          <TextField
            labelClassName={styles.container__input} title={'Name'}
            inputProps={{ id: 'LoginID', value: login, onChange: onChangeLogin }}
          />
          <TextField
            labelClassName={styles.container__input} title={'Password'}
            inputProps={{ id: 'PasswordID', value: password, onChange: onChangePassword }}
          />
          {loginStatus === DATA_STATUSES.REQUESTING && (<p className={styles.container__error}>{'Wait'}</p>)}
          {(error || loginStatus === DATA_STATUSES.ERROR) && (<p className={styles.container__error}>Error :-(</p>)}
          <Button
            className={styles.container__btn}
            buttonProps={{ type: 'submit', disabled: loginStatus === DATA_STATUSES.REQUESTING }}>Submit</Button>
        </form>
      </div>
    </Container>
  )
}

export default connect((store: Store) => ({
  isAuthorized: store.auth.isAuthorized,
  loginStatus: store.auth.loginStatus
}), {
  loginAction: login
})(AuthScene)
