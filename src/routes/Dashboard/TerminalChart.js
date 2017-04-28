import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer, Legend,
  PieChart, Pie, Cell, Tooltip
} from 'recharts'

const TerminalChart = ({ data }) => {
  const COLORS = ['#8fc9fb', '#64ea91', '#f69899', '#f8c82e']

  return (
    <ResponsiveContainer minHeight={288}>
      <PieChart>
        <Pie
          data={data}
          label={({ percent, name }) => `${name}${(percent * 100).toFixed(0)}%`}
          cy="40%" cx="50%"
          innerRadius={48} outerRadius={72}
          fill="#8884d8">
          {
            data.map((entry, index) =>
              <Cell key={`cell-${index}`}
                fill={COLORS[index]}
              />
            )
          }
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}


export default TerminalChart

