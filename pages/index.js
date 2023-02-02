
import styles from '../styles/Home.module.css'
import Navbar from '../compend/navbar'
import Footer from '../compend/footer'
import Home from '../compend/Home'
import React, { Component } from 'react';
import MyCarousel from '../compend/MyCarousel';
const logo = new URL("./LOGO.png",import.meta.url) ;
class Index extends Component {
  render() {
    return (
      <body className={styles.body}>
        <Navbar/> 
        <MyCarousel/>
        <Home/>
        <Footer/>
      </body>
    );
  }
}

export default Index;
