import React from 'react';
import Header from './Header';
import Menu from '../../layout/Menu';
import Footer from '../../layout/Footer';
import Travel from '../../layout/Travel';
import './index.scss';


function Home(props) {
  return (
    <div>
      <Menu />
      <Header />
      <section className="travels">
        <div className="row1">
          <Travel
            offer="Save $90, pay only"
            price="$359"
            imageUrl="beijing.JPG"
            name="Beijing"
          />

          <Travel
            offer="Save $90, pay only"
            price="$359"
            imageUrl="buenos_aires.JPG"
            name="Buenos Aires"
          />

          <Travel
            offer="Save $90, pay only"
            price="$359"
            imageUrl="ciudad_mexico.JPG"
            name="Ciudad de México"
          />
        </div>
        <div className="row2">
          <Travel
            offer="Save $90, pay only"
            price="$359"
            imageUrl="madrid.JPG"
            name="Madrid"
          />

          <Travel
            offer="Save $90, pay only"
            price="$359"
            imageUrl="tokyo.JPG"
            name="Tokyo"
          />

          <Travel
            offer="Save $90, pay only"
            price="$359"
            imageUrl="new_york.JPG"
            name="Nueva York"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;