import React, { Component } from 'react';
import styles from '../styles/index';
import GetWeatherContainer from '../containers/GetWeatherContainer';

class Main extends Component {
  render () {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.header}>
          <h2 style={styles.headerTitle}>React Weather App</h2>
          <GetWeatherContainer direction="row" styles={styles.headerForm}/>
        </div>
        {this.props.children}
      </div>
    )
  }
};

export default Main;