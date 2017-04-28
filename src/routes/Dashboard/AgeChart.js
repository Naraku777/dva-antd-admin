import React from 'react'
import PropTypes from 'prop-types'
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts'

const AgeChart = ({ data }) => {
  return (
    <div>
      <ResponsiveContainer minHeight={288}>
        <BarChart data={data} layout={'vertical'} margin={{ top: 20 }}>
          <Bar type="monotone" dataKey="present" unit="%"
            name="占比" barSize={24} fill="#8884d8" />
          <CartesianGrid stroke="#ccc" horizontal={false} strokeDasharray="3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" label="岁" />
          <Legend />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}


export default AgeChart
