import React, { useState, useRef } from 'react';
import './Admin.css';
import defaultProductImage from '../Images/bo4.png';

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [products, setProducts] = useState([
    { id: 1, name: 'Raspberry Cocktail', category: 'Cocktail', price: 4.5, description: 'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients. With the goodness of 100% natural ingredients.', productImage: defaultProductImage },
    { id: 2, name: 'Strawberry Boba', category: 'Mocktail', price: 4.5, description: 'The beautiful range of Apple Naturale that has an exciting mix of natural ingredients. With the goodness of 100% natural ingredients.', productImage: defaultProductImage }
  ]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const fileInputRef = useRef(null);

  const handleCloseModal = () => {
    setEditingProduct(null);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleSaveProduct = () => {
    setProducts(products.map(product => product.id === editingProduct.id ? editingProduct : product));
    setEditingProduct(null);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProduct({ ...editingProduct, productImage: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpdateImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  const filteredProducts = products.filter(product => {
    return (
      (filterCategory === '' || product.category === filterCategory) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

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
                <h3>Monthly Orders</h3>
                <p>18</p>
                <small>2 Completed</small>
              </div>
              <div className="dashboard-card">
                <h3>Active Orders</h3>
                <p>15</p>
                <small>28 Completed</small>
              </div>
              <div className="dashboard-card">
                <h3>Weekly Orders</h3>
                <p>4</p>
                <small>1 Completed</small>
              </div>
              <div className="dashboard-card">
                <h3>Productivity</h3>
                <p>76%</p>
                <small>5% Completed</small>
              </div>
            </div>
            <div className="active-projects">
              <h3>Active Orders</h3>
              <table>
                <thead>
                  <tr>
                    <th>Occation Name</th>
                    <th>Hours</th>
                    <th>Priority</th>
                    <th>Sample Image</th>
                    <th>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Birthday Celebration</td>
                    <td>6</td>
                    <td>Medium</td>
                    <td><img src={defaultProductImage} alt="team" className="team-avatar" /></td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Birthday Celebration</td>
                    <td>6</td>
                    <td>Medium</td>
                    <td><img src={defaultProductImage} alt="team" className="team-avatar" /></td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Birthday Celebration</td>
                    <td>6</td>
                    <td>Medium</td>
                    <td><img src={defaultProductImage} alt="team" className="team-avatar" /></td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Birthday Celebration</td>
                    <td>6</td>
                    <td>Medium</td>
                    <td><img src={defaultProductImage} alt="team" className="team-avatar" /></td>
                    <td>89%</td>
                  </tr>
                  <tr>
                    <td>Birthday Celebration</td>
                    <td>6</td>
                    <td>Medium</td>
                    <td><img src={defaultProductImage} alt="team" className="team-avatar" /></td>
                    <td>89%</td>
                  </tr>
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
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {selectedSection === 'previewProducts' && (
          <div id="admin-products-section">
            <div className='filter-and-search'>
              <select id="filtering" name='filterProduct' type="select" value={filterCategory} onChange={handleFilterChange}>
                <option value="">Filter</option>
                <option value="">All</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Mocktail">Mocktail</option>
                <option value="Boba">Boba</option>
              </select>
              <input type='search' name='search' id='search' placeholder="Search" value={searchTerm} onChange={handleSearchChange}></input>
            </div>
            {filteredProducts.map(product => (
              <div className="admin-product-card" key={product.id}>
                <img src={product.productImage} alt={product.name} className="admin-product-image" />
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
            <div className="modal-header">
              <h2>Edit Product</h2>
              <button className="closing-button" onClick={handleCloseModal}>×</button>
            </div>
            <div className="edit-product-container">
              <div className="image-container">
                <img src={editingProduct.productImage} alt={editingProduct.name} className="edit-product-image" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                />
                <button onClick={handleUpdateImageClick} className="update-image-button">Update Image</button>
              </div>
              <div className="edit-product-details">
                <div className="edit-product-field">
                  <label>Product name:</label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  />
                </div>
                <div className="edit-product-field">
                  <label>Category:</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                  >
                    <option value="Cocktail">Cocktail</option>
                    <option value="Mocktail">Mocktail</option>
                    <option value="Boba">Boba</option>
                  </select>
                </div>
                <div className="edit-product-field">
                  <label>Price:</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
                  />
                </div>
                <div className="edit-product-field">
                  <label>Description:</label>
                  <textarea
                    className="non-resizable-textarea"
                    value={editingProduct.description}
                    onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                    rows={6}
                  />
                </div>
                <button onClick={handleSaveProduct} className="admin-save-button">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
