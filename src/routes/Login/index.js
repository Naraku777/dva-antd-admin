import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const Login = () => {
  return (
    <div>
      Login Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Login);
