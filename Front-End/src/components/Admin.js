import React, { useState } from 'react';
import './Admin.css';
import productImage from '../Images/bob1.png';

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Raspberry Cocktail', category: 'Cocktail', price: 4.5, description: 'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients. With the goodness of 100% natural ingredients.' },
    { id: 2, name: 'Raspberry Cocktail', category: 'Cocktail', price: 4.5, description: 'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients. With the goodness of 100% natural ingredients.' },
  ]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSaveProduct = () => {
    setEditingProduct(null);
  };

  return (
    <div id="admin-main-container">
      <div id="admin-sidebar">
        <div id="admin-sidebar-logo">Tipsy Alley</div>
        <div className="admin-sidebar-item" onClick={() => setSelectedSection('dashboard')}>Dashboard</div>
        <div className="admin-sidebar-item" onClick={() => setSelectedSection('bookings')}>Bookings</div>
        <div className="admin-sidebar-item" onClick={() => setSelectedSection('previewProducts')}>Preview Products</div>
      </div>
      <div id="admin-content">
        {selectedSection === 'dashboard' && (
          <div id="admin-dashboard-section">
            <h2>Dashboard</h2>
            <div className="dashboard-overview">
              <div className="dashboard-card">
                <h3>Projects</h3>
                <p>18</p>
                <small>2 Completed</small>
              </div>
              <div className="dashboard-card">
                <h3>Active Tasks</h3>
                <p>132</p>
                <small>28 Completed</small>
              </div>
              <div className="dashboard-card">
                <h3>Teams</h3>
                <p>12</p>
                <small>1 Completed</small>
              </div>
              <div className="dashboard-card">
                <h3>Productivity</h3>
                <p>76%</p>
                <small>5% Completed</small>
              </div>
            </div>
            <div className="active-projects">
              <h3>Active Projects</h3>
              <table>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Hours</th>
                    <th>Priority</th>
                    <th>Members</th>
                    <th>Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your project rows here */}
                  <tr>
                    <td>Dropbox Design System</td>
                    <td>34</td>
                    <td>Medium</td>
                    <td><img src={productImage} alt="team" className="team-avatar" /></td>
                    <td>15%</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {selectedSection === 'bookings' && (
          <div id="admin-bookings-section">
            <h2>Bookings</h2>
            <table id="admin-bookings-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Event</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Akwasi Boadi</td>
                  <td>0556831175</td>
                  <td>agyei123@gmail.com</td>
                  <td>06/07/24</td>
                  <td>Birthday</td>
                  <td>East Legon</td>
                </tr>
                <tr>
                  <td>Afia Manu</td>
                  <td>0556831175</td>
                  <td>agyei123@gmail.com</td>
                  <td>06/07/24</td>
                  <td>Wedding</td>
                  <td>Kumasi</td>
                </tr>
                <tr>
                  <td>Afram Del</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {selectedSection === 'previewProducts' && (
          <div id="admin-products-section">
            <h2>Preview Products</h2>
            {products.map(product => (
              <div className="admin-product-card" key={product.id}>
                <img src={productImage} alt={product.name} className="admin-product-image" />
                <div className="admin-product-details">
                  <h3>{product.name}</h3>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>{product.description}</p>
                  <div className="admin-product-actions">
                    <button onClick={() => handleEditProduct(product)} className="admin-edit-button">Edit</button>
                    <button className="admin-delete-button">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {editingProduct && (
        <div id="admin-modal">
          <div id="admin-modal-content">
            <h2>Edit Product</h2>
            <label>
              Product Name:
              <input type="text" value={editingProduct.name} onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })} />
            </label>
            <label>
              Category:
              <input type="text" value={editingProduct.category} onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })} />
            </label>
            <label>
              Price:
              <input type="number" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })} />
            </label>
            <label>
              Description:
              <textarea value={editingProduct.description} onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })} />
            </label>
            <button onClick={handleSaveProduct} className="admin-save-button">Save Changes</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
