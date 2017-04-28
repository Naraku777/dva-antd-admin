import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const Construction = () => {
  return (
    <div>
      Construction Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(Construction);
