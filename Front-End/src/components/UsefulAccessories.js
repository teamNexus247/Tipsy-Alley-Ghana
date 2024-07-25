// import React from 'react'
// import { Link } from "react-router-dom";
// import logo from '../Images/Logo.png'; 
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container py-2">
//                     <Link className="navbar-brand d-flex align-items-center" to="/Home">
//                         <img src={logo} alt="Logo" className="logo me-2" />
//                         Tipsy Alley GH
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" tip-controls="navbarNav" tip-expanded="false" tip-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse align-middle" id="navbarNav">
//                         <ul className="navbar-nav ms-auto nav_ul align-items-center">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/Home">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/services">Products</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/bookOrder">Book Order</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/events">Events & Gallery</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;
// import React from 'react'
// import { Link } from "react-router-dom";
// import logo from '../Images/Logo.png'; 
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)' }}>
//                 <div className="container py-2">
//                     <Link className="navbar-brand d-flex align-items-center" to="/Home">
//                         <img src={logo} alt="Logo" className="logo me-2" />
//                         Tipsy Alley GH
//                     </Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" tip-controls="navbarNav" tip-expanded="false" tip-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse align-middle" id="navbarNav">
//                         <ul className="navbar-nav zms-auto nav_ul align-items-center">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="./Home">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/services">Products</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/booking">Book Order</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/events">Events & Gallery</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/admin">Admin Page</Link>
//                             </li>
                            
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Images/Logo.png';

// const Navbar = () => {
//   return (
//     <>
//       <nav> {/* Replace with a meaningful class name like 'navbar' */}
//         <div> {/* Replace with a meaningful class name like 'navbar-container' */}
//           <Link to="/Home">
//             <img src={logo} alt="Logo" />
//             Tipsy Alley GH
//           </Link>
//           <button type="button">
//             <span>&#9776;</span>
//           </button>
//           <div> {/* Replace with a meaningful class name like 'nav-links' (initially hidden) */}
//             <ul>
//               <li>
//                 <Link to="/Home">Home</Link>
//               </li>
//               <li>
//                 <Link to="/services">Products</Link>
//               </li>
//               <li>
//                 <Link to="/booking">Book Order</Link>
//               </li>
//               <li>
//                 <Link to="/events">Events & Gallery</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//               <li>
//                 <Link to="/admin">Admin Page</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;



// import React from 'react';
// import '../Styles/Admin.css';
// import team2 from '../Images/bob.png';

// const Admin = () => {
//   return (
//     <div className="admin-container">
//       <header className="admin-header">
//         <div className="logo">Admin Portal</div>
//         <div className="search-bar">
//           <input type="search" placeholder="Products" />
//         </div>
//         <button className="logout-button">Log Out</button>
//       </header>
      
//       <main className="admin-main">
//         <h1>Manage your inventory effortlessly.</h1>
//         <p>Easily add, delete, and organize your products. Boost efficiency with our user-friendly interface.</p>
//         <button className="get-started-button">Get Started</button>
//         <div className="image-container">
//           <img src={team2} alt="Drinks" />
//         </div>
//       </main>

//       <section className="bookings">
//         <h2>Bookings</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Customer Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Event Date</th>
//               <th>Event Time</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td data-label="Customer Name">Akwasi Boadi</td>
//               <td data-label="Phone">0558831175</td>
//               <td data-label="Email">agyei123@gmail.com</td>
//               <td data-label="Event Date">06/07/24</td>
//               <td data-label="Event Time">9:00am</td>
//               <td data-label="Location">East Legon</td>
//             </tr>
//             <tr>
//               <td data-label="Customer Name">Afia Manu</td>
//               <td data-label="Phone">0558831175</td>
//               <td data-label="Email">agyei123@gmail.com</td>
//               <td data-label="Event Date">06/07/24</td>
//               <td data-label="Event Time">12:00pm</td>
//               <td data-label="Location">Abrepo-Kumasi</td>
//             </tr>
//             <tr>
//               <td data-label="Customer Name">Afram Del</td>
//               <td colSpan="5" className="event-details">Event Details</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       <section className='add-products'>
//         <h2>Add Products</h2>
//         <div className='form-row'>
//           <label>Product Name</label>
//           <input className='add-label' type='text' placeholder='Input Product Name' />
//         </div>
//         <div className='form-row'>
//           <label>Price</label>
//           <input className='add-label' type='text' placeholder='Input Product price' />
//         </div>
//         <div className='form-row'>
//           <label>Add Image</label>
//           <input className='add-label' type='file' placeholder='Input Product price' />
//         </div>
//         <button className='add-products-button'>Add Products</button>
//       </section>

//       <section className='delete-products-section'>
//   <h2>Remove/Delete Products</h2>
//   <div className='delete-products-form-row'>
//     <label className='delete-products-label'>Product Category</label>
//     <select className='delete-products-select'>
//       <option>Select</option>
//       <option>Cocktail</option>
//       <option>Moctail</option>
//       <option>Boba Drinks</option>
//     </select>
//   </div>
//   <div className='delete-products-form-row'>
//     <label className='delete-products-label'>Product Name</label>
//     <select className='delete-products-select'>
//       <option>Select</option>
//     </select>
//   </div>
//   <button className='delete-products-button'>Delete Products</button>
//   <div className='delete-products-nav'>
//     <a href="#">Add New Products</a>
//     <a href="#">Remove Products</a>
//     <a href="#">Inventory Management</a>
//     <a href="#">User Permissions</a>
//   </div>
// </section>

//     </div>
//   );
// };

// export default Admin;

// background: linear-gradient(to right, #6a11cb, #2575fc);

{/* <section className="about-us-team">
            <div className="container">
              <h2>Have You Enjoyed Any of These?</h2>
              <div className="team-members">
                <div className="team-member">
                  <div className="team-member-img-container">
                    <img src={team1} alt="John Doe" />
                  </div>
                  <h3>Boba</h3>
                  <p>Brown</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
                    quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
                    minus dolor.
                  </p>
                </div>
                <div className="team-member">
                  <div className="team-member-img-container">
                    <img src={team2} alt="Jane Smith" />
                  </div>
                  <h3>Cocktail</h3>
                  <p>Brown</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
                    quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
                    minus dolor.
                  </p>
                </div>
                <div className="team-member">
                  <div className="team-member-img-container">
                    <img src={team3} alt="Mike Johnson" />
                  </div>
                  <h3>Moctail</h3>
                  <p>Blue</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius optio commodi aperiam,
                    quaerat placeat, hic tempora omnis odio unde sed nihil quisquam laudantium modi corrupti
                    minus dolor.
                  </p>
                </div>
              </div>
            </div>
          </section> */}



        //   .about-us-team {
        //     background: #64a2ff;
        //     color: white;
        //     padding: 50px 0;
        //     text-align: center;
        //   }
          
        //   .about-us-team h2 {
        //     font-size: 2em;
        //     margin-bottom: 40px;
        //   }
          
        //   .team-members {
        //     display: flex;
        //     justify-content: center;
        //     flex-wrap: nowrap;
        //     gap: 20px;
        //   }
          
        //   .team-member {
        //     background-color: #3083ff;
        //     border-radius: 5px;
        //     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        //     transition: transform 0.3s ease, box-shadow 0.3s ease;
        //     width: 350px;
        //     text-align: center;
        //     overflow: hidden;
        //   }
          
        //   .team-member:hover {
        //     transform: translateY(-10px);
        //     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        //   }
          
        //   .team-member-img-container {
        //     width: 100%;
        //     height: 0;
        //     padding-top: 100%;
        //     position: relative;
        //     overflow: hidden;
        //   }
          
        //   .team-member-img-container img {
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     width: 100%;
        //     height: 100%;
        //     object-fit: cover;
        //     transition: transform 0.3s ease;
        //   }
          
        //   .team-member:hover .team-member-img-container img {
        //     transform: scale(1.1);
        //   }
          
        //   .team-member h3 {
        //     margin: 15px 0 5px;
        //     font-size: 1.5em;
        //     color: #e91e63;
        //   }
          
        //   .team-member p {
        //     text-align: left;
        //     margin: 0 15px 15px;
        //     font-size: 1em;
        //     color: #fff;
        //   }


        
//   .image, .content {
//     width: 100%;
//     margin: 0 0 30px;
//   }


//   .image, .content {
//     width: 100%;
//     margin: 0 0 30px;
//   }
  
//   .team-members {
//     display: flex;
//     justify-content: center;
//     flex-wrap: wrap;
//     gap: 2px;
//   }














/*Admin Old*/ 


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../Styles/Admin.css';
// import team2 from '../Images/bob.png';

// const Admin = ({ setAuth }) => {
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [productNames, setProductNames] = useState([]);
//   const navigate = useNavigate();

//   const productData = {
//     Cocktail: ['Margarita', 'Martini', 'Mojito'],
//     Moctail: ['Virgin Mojito', 'Shirley Temple', 'Nojito'],
//     Boba_Drinks: ['Classic Milk Tea', 'Taro Milk Tea', 'Matcha Latte'],
//   };

//   const handleCategoryChange = (event) => {
//     const category = event.target.value;
//     setSelectedCategory(category);
//     setProductNames(productData[category] || []);
//   };

//   const handleLogout = () => {
//     setAuth(false);
//     localStorage.removeItem('isAuth');
//     navigate('/login');
//   };

//   return (
//     <div className="admin-container">
//       <header className="admin-header">
//         <div className="logo">Admin Portal</div>
//         <div className="search-bar">
//           <input type="search" placeholder="Products" />
//         </div>
//         <button className="logout-button" onClick={handleLogout}>Log Out</button>
//       </header>
      
//       <main className="admin-main">
//         <h1>Manage your inventory effortlessly.</h1>
//         <p>Easily add, delete, and organize your products. Boost efficiency with our user-friendly interface.</p>
//         <button className="get-started-button">Get Started</button>
//         <div className="image-container">
//           <img src={team2} alt="Drinks" />
//         </div>
//       </main>

//       <section className="bookings">
//         <h2>Bookings</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Customer Name</th>
//               <th>Phone</th>
//               <th>Email</th>
//               <th>Event Date</th>
//               <th>Event Time</th>
//               <th>Location</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td data-label="Customer Name">Akwasi Boadi</td>
//               <td data-label="Phone">0558831175</td>
//               <td data-label="Email">agyei123@gmail.com</td>
//               <td data-label="Event Date">06/07/24</td>
//               <td data-label="Event Time">9:00am</td>
//               <td data-label="Location">East Legon</td>
//             </tr>
//             <tr>
//               <td data-label="Customer Name">Afia Manu</td>
//               <td data-label="Phone">0558831175</td>
//               <td data-label="Email">agyei123@gmail.com</td>
//               <td data-label="Event Date">06/07/24</td>
//               <td data-label="Event Time">12:00pm</td>
//               <td data-label="Location">Abrepo-Kumasi</td>
//             </tr>
//             <tr>
//               <td data-label="Customer Name">Afram Del</td>
//               <td colSpan="5" className="event-details">Event Details</td>
//             </tr>
//           </tbody>
//         </table>
//       </section>

//       <section className='add-products'>
//         <h2>Add Products</h2>
//         <div className='form-row'>
//           <label>Product Name</label>
//           <input className='add-label' type='text' placeholder='Input Product Name' />
//         </div>
//         <div className='form-row'>
//           <label>Price</label>
//           <input className='add-label' type='text' placeholder='Input Product price' />
//         </div>
//         <div className='form-row'>
//           <label>Add Image</label>
//           <input className='add-label' type='file' accept="image/*" />
//         </div>
//         <button className='add-products-button'>Add Products</button>
//       </section>

//       <section className='delete-products-section'>
//         <h2>Remove/Delete Products</h2>
//         <div className='delete-products-form-row'>
//           <label className='delete-products-label'>Product Category</label>
//           <select className='delete-products-select' value={selectedCategory} onChange={handleCategoryChange}>
//             <option value="">Select</option>
//             <option value="Cocktail">Cocktail</option>
//             <option value="Moctail">Moctail</option>
//             <option value="Boba_Drinks">Boba Drinks</option>
//           </select>
//         </div>
//         <div className='delete-products-form-row'>
//           <label className='delete-products-label'>Product Name</label>
//           <select className='delete-products-select'>
//             <option value="">Select</option>
//             {productNames.map((productName, index) => (
//               <option key={index} value={productName}>{productName}</option>
//             ))}
//           </select>
//         </div>
//         <button className='delete-products-button'>Delete Products</button>
//         <div className='delete-products-nav'>
//           <a href="#">Add New Products</a>
//           <a href="#">Remove Products</a>
//           <a href="#">Inventory Management</a>
//           <a href="#">User Permissions</a>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Admin;



/*Admin Old Style */


// .admin-container {
//   font-family: Arial, sans-serif;
// }

// .admin-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// .logo {
//   font-size: 20px;
//   font-weight: bold;
// }

// .search-bar input {
//   padding: 8px;
//   font-size: 14px;
//   width: 200px;
// }

// .logout-button {
//   padding: 8px 16px;
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// }

// .admin-main {
//   text-align: center;
//   padding: 20px;
//   background-color: #007bff;
//   color: #fff;
// }

// .admin-main h1 {
//   font-size: 36px;
//   margin-bottom: 10px;
// }

// .admin-main p {
//   font-size: 18px;
//   margin-bottom: 20px;
// }

// .get-started-button {
//   padding: 10px 20px;
//   background-color: #fff;
//   color: #007bff;
//   border: none;
//   border-radius: 4px;
//   font-size: 16px;
//   cursor: pointer;
// }

// .image-container {
//   margin-top: 20px;
// }

// .image-container img {
//   background-image: url('../bobablue.png');
//   max-width: 100%;
//   border-radius: 8px;
// }

// .bookings {
//   padding: 20px;
//   margin: 20px auto;
//   width: 100%;
// }

// .bookings h2 {
//   text-align: center;
//   color: #b51010;
//   font-size: 24px;
//   margin-bottom: 10px;
// }

// .bookings table {
//   width: 100%;
//   border-collapse: collapse;
//   border: none;
// }

// .bookings th, .bookings td {
//   border: none;
//   padding: 8px;
//   text-align: left;
// }

// .bookings th {
//   background-color: #f2f2f2;
// }

// .bookings .event-details {
//   text-align: center;
//   font-weight: bold;
//   font-style: italic;
// }

// .add-products {
//   padding: 60px;
//   background-color: #2c2f33;
//   color: #fff;
//   margin: 20px auto;
// }

// .add-products h2 {
//   text-align: center;
//   font-size: 24px;
//   color: #fff;
// }

// .form-row {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 15px;
// }

// .form-row label {
//   flex: 1;
//   font-size: 22px;
// }

// .form-row input {
//   flex: 2;
//   width: 40%;
//   padding: 8px;
//   font-size: 16px;
//   border: none;
//   margin-left: 20px;
// }

// .add-products-button {
//   display: block;
//   width: 150px;
//   padding: 10px;
//   background-color: #b51010;
//   color: #fff;
//   border: none;
//   cursor: pointer;
//   margin: 0 auto;
// }

// .delete-products-section {
//   text-align: center;
//   padding: 10px;
//   background-color: #fff;
//   margin: 2px auto;
// }

// .delete-products-form-row {
//   margin: 20px 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .delete-products-label {
//   font-weight: bold;
//   margin-right: 20px;
//   font-size: 18px;
// }

// .delete-products-select {
//   width: 500px;
//   padding: 10px;
//   font-size: 16px;
// }

// .delete-products-button {
//   background-color: #d32f2f;
//   color: white;
//   border: none;
//   padding: 15px 30px;
//   font-size: 16px;
//   cursor: pointer;
// }

// .delete-products-button:hover {
//   background-color: #c12727;
// }

// .delete-products-nav {
//   display: flex;
//   justify-content: space-around;
//   background-color: #f2f2f2;
//   padding: 10px 0;
//   margin-top: 50px;
// }

// .delete-products-nav a {
//   text-decoration: none;
//   color: #000;
//   font-size: 14px;
//   text-align: center;
// }


// @media (max-width: 768px) {
//   .admin-header {
//     flex-direction: row;
//     align-items: flex-start;
//   }

//   .admin-main h1 {
//     font-size: 28px;
//   }

//   .admin-main p {
//     font-size: 14px;
//   }

//   .get-started-button {
//     font-size: 12px;
//   }

//   .search-bar input {
//     width: 100%;
//   }

//   .bookings, .add-products, .delete-products-section {
//     width: 100%;
//   }

//   .bookings table, .bookings thead, .bookings tbody, .bookings th, .bookings td, .bookings tr {
//     display: block;
//   }

//   .bookings tr {
//     margin-bottom: 15px;
//   }

//   .bookings td {
//     text-align: right;
//     padding-left: 50%;
//     position: relative;
//   }

//   .bookings td::before {
//     content: attr(data-label);
//     position: absolute;
//     left: 0;
//     width: 50%;
//     padding-left: 15px;
//     font-weight: bold;
//     text-align: left;
//   }

//   .delete-products-form-row {
//     flex-direction: column;
//     align-items: flex-start;
//   }

//   .delete-products-label {
//     margin-right: 0;
//     margin-bottom: 10px;
//   }

//   .delete-products-select {
//     width: 100%;
//   }

//   .delete-products-nav {
//     flex-direction: column;
//   }

//   .delete-products-nav a {
//     margin-bottom: 10px;
//   }
// }

// @media (max-width: 480px) {
//   .admin-main h1 {
//     font-size: 24px;
//   }

//   .admin-main p {
//     font-size: 12px;
//   }

//   .get-started-button {
//     font-size: 10px;
//   }

//   .search-bar input {
//     width: 100%;
//   }
// }






/*Booking */



// import React, { useRef } from 'react';
// import '../Styles/Booking.css';
// import headerImage from '../Images/bobablue.png';

// const Booking = () => {
//     const formRef = useRef(null);

//     const scrollToForm = () => {
//         if (formRef.current) {
//             formRef.current.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <div className='main-book'>
//             <div className="homepage" id='book'>
//                 <div className="content">
//                     <h1 className="title">Book Us For<br /> Your Events.</h1>
//                     <p className="description">
//                     Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
//                     ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
//                     </p>
//                     <button className="cta-button" onClick={scrollToForm}>Book Now</button>
//                 </div>
//             </div>

//             <div className="booking-container" ref={formRef}>
//                 <form className="booking-form">
//                     <div>
//                         <label>Your Name</label>
//                         <input type="text" placeholder='Enter full name'/>
//                     </div>
//                     <div>
//                         <label>Your Phone Number</label>
//                         <input type="text" placeholder='Input phone number'/>
//                     </div>
//                     <div>
//                     <div>
//                         <label>Email Address (Optional)</label>
//                         <input type="email" placeholder='Enter Email'/>
//                     </div>
//                     <div>
//                         <label>Event Location</label>
//                         <input type='text' placeholder='Enter specific Location'></input>
//                     </div>
//                         <label>Event Date (dd/mm/yy)</label>
//                         <input type="date"/>
//                     </div>
//                     <div>
//                         <label>Event Time</label>
//                         <input type="time" />
//                     </div>
//                     <div>
//                         <label>Event Details</label>
//                         <textarea rows="4" placeholder='Add more information about the event'></textarea>
//                     </div>
//                     <button type="submit">Book Us</button>
//                 </form>
//             </div>
//             </div>
//     );
// }

// export default Booking;