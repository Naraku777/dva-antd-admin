import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'

import styles from './NumberCard.less'

const NumberCard = ({ icon, color, title, number }) => {
  var bodyStyle = {
    display: 'flex',
  }

  return (
    <Card className={styles.normal} bordered={false} bodyStyle={bodyStyle}>
      <Icon className={styles.icon} type={icon} style={{ color }} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.number}>
          <CountUp start={0} end={number}
            duration={1} useEasing
            useGrouping separator=","
          />
        </p>
      </div>
    </Card>
  )
}

export default NumberCard
