import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router'
import { Store } from '../../../app-config/rootReducer'

interface PrivateRouteProps extends RouteProps {
  isAuthorized: boolean
  c: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
  path: string
}

const PrivateRoute = ({ path, c, isAuthorized }: PrivateRouteProps) => {
  if (!isAuthorized) {
    return (
      <Redirect to={'/auth'}/>
    )
  }
  return <Route path={path} component={c}/>
}

export default connect((store: Store) => ({ isAuthorized: store.auth.isAuthorized }), {})(PrivateRoute)
