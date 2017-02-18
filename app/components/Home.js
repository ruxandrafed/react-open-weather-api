import React from 'react';
import styles from '../styles/index';
import GetWeatherContainer from '../containers/GetWeatherContainer';

const Home = () => (
  <div style={styles.homeContainer}>
    <h1 style={styles.homeHeader}>Enter a City and State</h1>
    <GetWeatherContainer />
  </div>
);

export default Home;