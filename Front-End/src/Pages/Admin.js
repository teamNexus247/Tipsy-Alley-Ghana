import React, { useState } from 'react';
import '../Styles/Admin.css';
import logo from '../Images/Logo.png';


const Admin = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="admin-container" className={isSidebarOpen ? 'sidebar-open' : ''}>
      <aside id="sidebar">
        <div id="logo" onClick={toggleSidebar}>
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav id="nav">
          <button id="dashboard-btn" className={activeTab === 'Dashboard' ? 'active' : ''} onClick={() => setActiveTab('Dashboard')}>
            <span className="icon">🏠</span>
            Dashboard
          </button>
          <button id="bookings-btn" className={activeTab === 'Bookings' ? 'active' : ''} onClick={() => setActiveTab('Bookings')}>
            <span className="icon">📅</span>
            Bookings
          </button>
          <button id="preview-products-btn" className={activeTab === 'PreviewProducts' ? 'active' : ''} onClick={() => setActiveTab('PreviewProducts')}>
            <span className="icon">🛍️</span>
            Preview Products
          </button>
        </nav>
        <div id="logout">
          <button>
            <span className="icon">🚪</span>
            Logout
          </button>
        </div>
      </aside>
      <main id="main-content">
        {activeTab === 'Dashboard' && (
          <>
            <div id="top-row">
              <div id="top-card-1" className="top-card"></div>
              <div id="top-card-2" className="top-card"></div>
              <div id="top-card-3" className="top-card"></div>
            </div>
            <div id="bottom-row">
              <div id="large-card" className="large-card"></div>
              <div id="medium-card" className="medium-card"></div>
            </div>
          </>
        )}
        {activeTab === 'Bookings' && <div id="bookings-content" className="tab-content">Bookings Content</div>}
        {activeTab === 'PreviewProducts' && <div id="preview-products-content" className="tab-content">Preview Products Content</div>}
      </main>
    </div>
  );
};

export default Admin;

