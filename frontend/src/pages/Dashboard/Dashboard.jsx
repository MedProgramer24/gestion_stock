import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Bell, Menu, User, Search, LayoutGrid, Package, Layers, Users, FileText, ShoppingCart, AlertTriangle, LogOut } from 'lucide-react';
import './Dashboard.css';


export default function Dashboard() {
  const [date, setDate] = useState('14/09/2023');
  
  // Données pour le graphique demandes/réclamations
  const demandesReclamationsData = [
    { name: 'Jan', demande: 10, reclamation: 5 },
    { name: 'Fev', demande: 18, reclamation: 7 },
    { name: 'Mar', demande: 50, reclamation: 10 },
    { name: 'Avr', demande: 55, reclamation: 18 },
    { name: 'May', demande: 45, reclamation: 30 },
    { name: 'Jun', demande: 22, reclamation: 10 },
    { name: 'Jul', demande: 20, reclamation: 8 },
    { name: 'Aou', demande: 15, reclamation: 10 },
    { name: 'Sep', demande: 40, reclamation: 5 },
    { name: 'Oct', demande: 25, reclamation: 22 },
    { name: 'Nov', demande: 18, reclamation: 18 },
    { name: 'Dec', demande: 10, reclamation: 8 },
  ];
  
  // Données pour le graphique circulaire
  const departmentData = [
    { name: 'Informatique', value: 4, color: '#5470c6' },
    { name: 'Administration', value: 3, color: '#91cc75' },
    { name: 'Electrique', value: 0, color: '#fac858' },
    { name: 'Industriel', value: 0, color: '#ee6666' },
    { name: 'Groupe', value: 1, color: '#73c0de' },
    { name: 'Chimie', value: 1, color: '#3ba272' },
    { name: 'Autre', value: 0, color: '#fc8452' },
  ];
  
  // Composant personnalisé pour le graphique circulaire
  const DepartmentPieChart = () => {
    return (
      <div className="relative h-64 w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border-8 border-transparent bg-white relative overflow-hidden">
            {departmentData.map((item, index) => {
              if (item.value === 0) return null;
              // Calculer les segments du cercle
              const total = departmentData.reduce((sum, data) => sum + data.value, 0);
              const segments = departmentData
                .filter(d => d.value > 0)
                .map(d => ({ ...d, percentage: (d.value / total) * 100 }));
              
              let startAngle = 0;
              for (let i = 0; i < index; i++) {
                if (departmentData[i].value > 0) {
                  startAngle += (departmentData[i].value / total) * 360;
                }
              }
              
              const angle = (item.value / total) * 360;
              
              return (
                <div 
                  key={index}
                  className="absolute inset-0"
                  style={{
                    background: `conic-gradient(transparent ${startAngle}deg, ${item.color} ${startAngle}deg, ${item.color} ${startAngle + angle}deg, transparent ${startAngle + angle}deg)`,
                  }}
                />
              );
            })}
            <div className="absolute inset-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Légende */}
        <div className="absolute bottom-0 left-0 right-0 text-xs">
          {departmentData.map((item, index) => (
            <div key={index} className="flex items-center mb-1">
              <div className="w-3 h-3 mr-1" style={{ backgroundColor: item.color }}></div>
              <span>{item.name}: {item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="flex items-center p-4 border-b">
          <div className="mr-2 text-blue-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 5L21 9L12 13L3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18L12 14L21 18L12 22L3 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 9V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 9V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-700">Skydash</h1>
          <button className="ml-auto text-gray-500">
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="mt-6">
          <SidebarItem icon={<LayoutGrid size={20} />} text="Dashboard" active />
          <SidebarItem icon={<Package size={20} />} text="Stock" />
          <SidebarItem icon={<Layers size={20} />} text="Gestion Categories" />
          <SidebarItem icon={<Users size={20} />} text="Gestion Departements" />
          <SidebarItem icon={<User size={20} />} text="Gestion utilisateurs" />
          <SidebarItem icon={<FileText size={20} />} text="Demandes" />
          <SidebarItem icon={<ShoppingCart size={20} />} text="Commandes" />
          <SidebarItem icon={<AlertTriangle size={20} />} text="Reclamations" />
          <SidebarItem icon={<LogOut size={20} />} text="Deconnexion" />
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 flex items-center justify-between border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="search"
              className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex items-center">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <User size={20} />
            </button>
            <button className="p-2 ml-2 text-gray-500 hover:text-gray-700">
              <Bell size={20} />
            </button>
            <button className="p-2 ml-2 text-gray-500 hover:text-gray-700">
              <Menu size={20} />
            </button>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="p-6">
          {/* Greeting and Date */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Bienvenue Naima</h1>
            <div className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md">
              <Calendar size={18} className="mr-2" />
              <span>{date}</span>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatCard title="Total Categories" count="15" icon={<LayoutGrid size={40} className="text-white" />} />
            <StatCard title="Total Article" count="15" icon={null} />
            <StatCard title="Total Demandes" count="3" icon={<div className="w-10 h-10 text-white"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg></div>} />
            <StatCard title="Total Reclamation" count="3" icon={<ShoppingCart size={40} className="text-white" />} />
          </div>
          
          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-center">demandes/réclamations</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={demandesReclamationsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="demande" stroke="#fab005" strokeWidth={2} />
                  <Line type="monotone" dataKey="reclamation" stroke="#15aabf" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="text-center text-xs mt-2 text-gray-500">Trial Version</div>
            </div>
            
            <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2 text-center">nombre des demandes pour chaque département</h2>
              <DepartmentPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ icon, text, active = false }) {
  return (
    <div className={`flex items-center px-4 py-3 ${active ? 'bg-blue-50 border-l-4 border-blue-500' : ''}`}>
      <div className={`mr-3 ${active ? 'text-blue-500' : 'text-gray-500'}`}>
        {icon}
      </div>
      <span className={`${active ? 'text-blue-600 font-medium' : 'text-gray-700'}`}>{text}</span>
    </div>
  );
}

// Stat Card Component
function StatCard({ title, count, icon }) {
  return (
    <div className="bg-blue-500 rounded-lg shadow overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="text-white text-lg font-medium">{title}</h3>
          <p className="text-white text-3xl font-bold mt-2">{count}</p>
        </div>
        <div className="flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
}