import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts'

const RegionChart = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer minHeight={288}>
        <BarChart data={data}>
          <Bar type="monotone" dataKey="present" unit="%"
            name="占比" barSize={32} fill="#8fc9fb" />
          <CartesianGrid stroke="#ccc" vertical={false} strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis width={24} />
          <Legend />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


export default RegionChart
