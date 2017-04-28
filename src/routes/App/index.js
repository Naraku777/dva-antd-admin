import React, { PropTypes } from 'react'
import { connect } from 'dva';

import styles from './index.less'
import MainLayout from '../../components/MainLayout'

const App = ({ children, dispatch, location, app }) => {

  const { isSiderCollapsed } = app
  const mainLayoutProps = {
    isSiderCollapsed,
    location,
    toggleSider() {
      dispatch({ type: 'app/toggleSider' })
    }
  }

  return (
    <MainLayout
      {...mainLayoutProps}>
      {children}
    </MainLayout>
  )
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object
}

const mapStateToProps = ({ app }) => ({
  app
})

export default connect(mapStateToProps)(App);
