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
  FileText
} from 'lucide-react';
import './Dashboard.css';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';

const Dashboard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [userName, setUserName] = useState('');
  const [selectedView, setSelectedView] = useState('Dashboard');

  useEffect(() => {
    axios.get('http://localhost:8000/api/user', { withCredentials: true })
      .then(response => {
        setUserName(response.data.name);
      })
      .catch(error => {
        console.error('Failed to fetch user data:', error);
      });
  }, []);

  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
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

  const renderContent = () => {
    switch (selectedView) {
      case 'Dashboard':
        return <DashboardComponent />;
      case 'Stock':
        return <div>Contenu de Stock</div>;
      case 'Gestion Catégories':
        return <div>Contenu de Gestion Catégories</div>;
      case 'Gestion Départements':
        return <div>Contenu de Gestion Départements</div>;
      case 'Gestion utilisateurs':
        return <div>Contenu de Gestion utilisateurs</div>;
      case 'Demandes':
        return <div>Contenu de Demandes</div>;
      case 'Commandes':
        return <div>Contenu de Commandes</div>;
      case 'Réclamations':
        return <div>Contenu de Réclamations</div>;
      case 'Déconnexion':
        // Clear session/localStorage and redirect
        localStorage.removeItem('user'); // example
        window.location.href = '/login';
        return null;
      default:
        return <DashboardComponent />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <Package />
          </div>
          <span className="sidebar-title">MEDStock</span>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`nav-item ${selectedView === item.label ? 'active' : ''}`}
              onClick={() => setSelectedView(item.label)}
            >
              <item.icon />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <div className="header-content">
            <div>
              <h1 className="header-title">
                Bienvenue <span className="name">{userName || 'Utilisateur'}</span>
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

        <div className="main-view">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
