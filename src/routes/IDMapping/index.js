import React from 'react'
import { connect } from 'dva';

import styles from './index.less'

const IDMapping = () => {
  return (
    <div>
      IDMapping Page
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

export default connect(mapStateToProps)(IDMapping);
