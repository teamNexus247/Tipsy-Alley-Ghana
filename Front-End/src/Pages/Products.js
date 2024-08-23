import React, { useState, useEffect } from 'react';
import '../Styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [error, setError] = useState('');

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth <= 1068) {
      setVisibleProducts(3);
    } else if (windowWidth <= 1920) {
      setVisibleProducts(3);
    } else if (windowWidth <= 480) {
      setVisibleProducts(3);
    } else {
      setVisibleProducts(products.length);
    }
  }, [windowWidth, products.length]);

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 3);
  };

  useEffect(() => {
    fetch('https://backe-xfzrysouwq-uc.a.run.app/api/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Optional: Log image URLs for debugging
        console.log('Image URLs:', data.map(product => product.image));

        // Assuming the image paths are relative, build the full path
        const baseURL = 'https://backe-xfzrysouwq-uc.a.run.app/uploads/';
        const productsArray = data.map(product => ({
          ...product,
          image: baseURL + product.image
        }));

        setProducts(productsArray);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch products. Please try again later.');
      });
  }, []);

  return (
    <div className="product-main">
      <div className="homepage" id='products'>
        <div className="content">
          <h1 className="title">Discover Our <br />Unique Products</h1>
          <p className="description">
            Explore our diverse range of beverages expertly <br /> made for you, from our signaturee cocktails to <br /> non-alchoholic mocktails
            and delicious boba drinks.
          </p>
          <button id='cta-button' className="cta-button"><a href="./booking">Get Some</a></button>
        </div>
      </div>
      <div className="product-head">
        <h1>Products Made Specially For You</h1>
        <p>
          Browse through our offerings and find the perfect drink to elevate your next gathering.
        </p>
      </div>
      <div className="product-grid">
        {error && <p className="error">{error}</p>}
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product._id} className="product-card">
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                onError={(e) => { e.target.src = '/path/to/default-image.jpg'; }} // Replace with actual default image path
              />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>{product.category}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <button className="show-more-button" onClick={showMoreProducts}>
          View More
        </button>
      )}
    </div>
  );
}

export default Products;