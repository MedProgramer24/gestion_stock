import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  Grid3X3,
  FileText,
  Hand,
  ShoppingBag
} from 'lucide-react';
import '../../pages/Dashboard/Dashboard.css'

function DashboardComponent() {
   // Sample data for charts
  const lineChartData = [
    { month: 'Jan', demandes: 15, reclamations: 8 },
    { month: 'Fév', demandes: 18, reclamations: 5 },
    { month: 'Mar', demandes: 25, reclamations: 12 },
    { month: 'Avr', demandes: 55, reclamations: 18 },
    { month: 'Mai', demandes: 45, reclamations: 25 },
    { month: 'Jun', demandes: 22, reclamations: 8 },
    { month: 'Jul', demandes: 18, reclamations: 6 },
    { month: 'Aoû', demandes: 15, reclamations: 4 },
    { month: 'Sep', demandes: 38, reclamations: 2 },
    { month: 'Oct', demandes: 25, reclamations: 15 },
    { month: 'Nov', demandes: 18, reclamations: 8 },
    { month: 'Déc', demandes: 12, reclamations: 5 }
  ];
  const pieChartData = [
    { name: 'Informatique', value: 4, color: '#10B981' },
    { name: 'Automatique', value: 4, color: '#3B82F6' },
    { name: 'Électrique', value: 3, color: '#F59E0B' },
    { name: 'Génie Civil', value: 1, color: '#6366F1' },
    { name: 'Industriel', value: 1, color: '#8B5CF6' },
    { name: 'Énergétique', value: 1, color: '#EC4899' },
    { name: 'Chimie', value: 1, color: '#EF4444' }
  ];

  return (
    
    <>
        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-card-content">
                <div className="stat-card-info">
                  <h3>Total Categories</h3>
                  <p>15</p>
                </div>
                <div className="stat-card-icon">
                  <Grid3X3 />
                </div>
              </div>
            </div>

            <div className="stat-card blue-400">
              <div className="stat-card-content">
                <div className="stat-card-info">
                  <h3>Total Article</h3>
                  <p>15</p>
                </div>
                <div className="stat-card-icon">
                  <FileText />
                </div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-card-content">
                <div className="stat-card-info">
                  <h3>Total Demandes</h3>
                  <p>3</p>
                </div>
                <div className="stat-card-icon">
                  <Hand />
                </div>
              </div>
            </div>

            <div className="stat-card blue-400">
              <div className="stat-card-content">
                <div className="stat-card-info">
                  <h3>Total Réclamation</h3>
                  <p>3</p>
                </div>
                <div className="stat-card-icon">
                  <ShoppingBag />
                </div>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="charts-grid">
            {/* Line Chart */}
            <div className="chart-card">
              <h3 className="chart-title">demandes/réclamations</h3>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis 
                      dataKey="month" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#6b7280' }}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="demandes" 
                      stroke="#f59e0b" 
                      strokeWidth={3}
                      dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                      name="demande"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="reclamations" 
                      stroke="#06b6d4" 
                      strokeWidth={3}
                      dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                      name="réclamation"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart */}
            <div className="chart-card">
              <h3 className="chart-title">nombre des demandes</h3>
              <p className="chart-subtitle">pour chaque département</p>
              <div className="pie-chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              {/* Legend */}
              <div className="chart-legend">
                {pieChartData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <div 
                      className="legend-color"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="legend-text">{item.name}: {item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default DashboardComponent