import React, { Component } from 'react';
import Header from './pages/header';
import Secondheader from './pages/secondheader';

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Secondheader/>

      </div>
    )
  }
}
