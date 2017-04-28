import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const Error = () => {
  return (
    <div>
      Error Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Error);
