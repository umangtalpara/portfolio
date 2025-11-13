import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'

/**
 * Skills donut chart component showing 80/20 backend/frontend split
 */
export function SkillsDonutChart() {
  const data = [
    { name: 'Backend', value: 80, color: '#10b981' }, // emerald-500
    { name: 'Frontend', value: 20, color: '#14b8a6' }, // teal-500
  ]

  const COLORS = [data[0].color, data[1].color]

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-2xl p-8 border border-emerald-200/50 dark:border-emerald-800/30 shadow-lg">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
              outerRadius={100}
              innerRadius={60}
              fill="#8884d8"
              dataKey="value"
              stroke="#fff"
              strokeWidth={2}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #10b981',
                borderRadius: '8px',
                padding: '8px',
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

