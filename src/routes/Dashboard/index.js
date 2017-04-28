import React from 'react'
import { connect } from 'dva';
import { Row, Col, Card } from 'antd'
import { LineChart, Line } from 'recharts';

import styles from './index.less'
import NumberCard from '../../components/Dashboard/NumberCard'
import RegionChart from './RegionChart'
import OSChart from './OSChart'
import TerminalChart from './TerminalChart'
import AgeChart from './AgeChart'

const Dashboard = ({ dashboard }) => {
  const { numbers, regionChartData, osChartData, terminalChartData, ageChartData } = dashboard

  const renderNumberCards = () => {
    return numbers.map(item =>
      <Col key={item.key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    )
  }

  return (
    <Row gutter={16} className="dashboard-grid">
      {renderNumberCards()}
      <Col md={24} lg={15}>
        <Card title="全国地区分布图">
          <RegionChart data={regionChartData} />
        </Card>
      </Col>
      <Col md={12} lg={9}>
        <Card title="用户终端分布图">
          <OSChart data={osChartData} />
        </Card>
      </Col>
      <Col md={12} lg={9}>
        <Card title="用户系统分布图">
          <TerminalChart data={terminalChartData} />
        </Card>
      </Col>
      <Col md={24} lg={15}>
        <Card title="用户年龄分布图">
          <AgeChart data={ageChartData} />
        </Card>
      </Col>
    </Row >
  )
}

const mapStateToProps = ({ dashboard }) => ({ dashboard })

export default connect(mapStateToProps)(Dashboard);
