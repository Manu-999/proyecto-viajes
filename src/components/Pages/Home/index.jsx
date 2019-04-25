import React from 'react';
import Header from './Header';
import Menu from '../../layout/Menu';
import Footer from '../../layout/Footer';


function Home(props) {
  return (
    <div>
      <Menu />
      <Header />
      <Footer />
    </div>
  );
}

export default Home;