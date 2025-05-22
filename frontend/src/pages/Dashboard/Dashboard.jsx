import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  Building2, 
  Users, 
  ShoppingCart, 
  MessageSquare, 
  LogOut,
  Search,
  Calendar,
  FileText,
  
} from 'lucide-react';
import './Dashboard.css';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
   const [userName, setUserName] = useState('');

  useEffect(() => {
    // Replace '/api/user' with your actual endpoint
    axios.get('http://localhost:8000/api/user')
      .then(response => {
        setUserName(response.data.name);
      })
      .catch(error => {
        console.error('Failed to fetch user data:', error);
      });
  }, []);

 
  

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Package, label: 'Stock' },
    { icon: Tags, label: 'Gestion Catégories' },
    { icon: Building2, label: 'Gestion Départements' },
    { icon: Users, label: 'Gestion utilisateurs' },
    { icon: FileText, label: 'Demandes' },
    { icon: ShoppingCart, label: 'Commandes' },
    { icon: MessageSquare, label: 'Réclamations' },
    { icon: LogOut, label: 'Déconnexion' }
  ];

  const formatDate = (date) => {
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        {/* Logo */}
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Package />
          </div>
          <span className="sidebar-title">MEDStock</span>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`nav-item ${item.active ? 'active' : ''}`}
            >
              <item.icon />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div>
              <h1 className="header-title">
                Bienvenue <span className="name">Mohamed</span>
              </h1>
            </div>
            <div className="header-actions">
              <div className="search-container">
                <Search />
                <input
                  type="text"
                  placeholder="search"
                  className="search-input"
                />
              </div>
              <div className="date-picker">
                <Calendar />
                {formatDate(currentDate)}
              </div>
            </div>
          </div>
        </div>
        <DashboardComponent/>

        
      </div>
    </div>
  );
};

export default Dashboard;