import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const WindControl = () => {
  return (
    <div>
      WindControl Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(WindControl);
