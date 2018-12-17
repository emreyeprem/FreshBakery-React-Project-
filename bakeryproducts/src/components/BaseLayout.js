import React, { Component } from 'react';
import HomePage from './HomePage'
import Footer from './Footer'
import Header from './Header'
import Search from './Search'
import About from './About'
import Store from './Store'
import Products from './Products'
import Coffee from './Coffee'
import Cake from './Cake'
import Beverages from './Beverages'
import Breadpastry from './Breadpastry'
import Smallbites from './Smallbites'
import Login from './Login'
import Register from './Register'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class BaseLayout extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }

   render() {


    return (
      <div>
         <Header />
            {this.props.children}
         <Footer />
      </div>

     )
   }

}

export default withRouter(BaseLayout)
