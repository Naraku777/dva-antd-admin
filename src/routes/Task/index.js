import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const Task = () => {
  return (
    <div>
      Task Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Task);
