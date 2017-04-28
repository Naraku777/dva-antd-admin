import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const Statistic = () => {
  return (
    <div>
      Statistic Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Statistic);
