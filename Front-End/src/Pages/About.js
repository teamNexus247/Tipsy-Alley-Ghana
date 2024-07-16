import React from 'react';
import '../Styles/About.css';
import team1 from '../Images/bo4.png';
import team2 from '../Images/bob5.png';
import team3 from '../Images/bob6.png';
import Bobg from '../Images/bobg.png';

const About = () => {
  return (
    <div className="about-us">
      <section>
      <div className="homepage">
      <div className="content">
        <h1 className="title">How Well <br />Do <span className='U-text'>U </span>Know Tipsy</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor incididunt<br /> 
          ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam.
        </p>
        <button className="cta-button">Know More</button>
      </div>
    </div>
    <div className="section2">
      <div className="image-container">
        <img src={Bobg} alt="Drinks" />
      </div>
      <div className="text-container">
        <h3>What is that special thing about us?</h3>
        <h1>Our Bubble Tale</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        <button className="cta-button">Load more</button>
      </div>
    </div>
      </section>
<section className="about-us-team">
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
</section>
    </div>
  );
};

export default About;
