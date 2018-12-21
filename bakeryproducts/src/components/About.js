import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import bakery from '../assets/img/bakery6.png'
import history from '../history';
import axios from 'axios'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {

      }
    }

  logout = ()=>{
    localStorage.clear()
    this.props.deleteToken()
    history.push('/')
   }

  render() {
    let withUser = ''
    let withoutUser = ''
    if(!this.props.token==''){
      withUser= <div><button className="btn btn-default dropdown-toggle dropbtn userloginbtn" type="button" data-toggle="dropdown" data-hover="dropdown">
          {this.props.username} <span className="caret"></span></button>
          <span className="fa-stack fa-x has-badge cartImg" data-count="">
            <Link to='/yourcart'><i className="fa fa-shopping-cart number">{this.props.cartcount}</i></Link>
            </span></div>

    } else {
       withoutUser= <button className="btn btn-default dropdown-toggle dropbtn" type="button" data-toggle="dropdown" data-hover="dropdown">
         My Account <span className="caret"></span></button>
    }

    return(
      <div>

      <h2 className="text-center text-white d-none d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3 tart titleabout">Our inspiration comes from you..&nbsp;</span><span className="site-heading-lower heading"><img className="img-fluid rounded about-heading-img mb-3 mb-lg-0 store-title-imgA" src={bakery} /></span></h2>
      <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4 navbar-ContainerA" id="mainNav">
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Fresh Bakery</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div
                  className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="nav navbar-nav mx-auto">
                      <li className="nav-item" role="presentation"><Link to='/' className="nav-link" >Home</Link></li>
                      <li className="nav-item" role="presentation"><Link to='/about' className="nav-link" >About us</Link></li>


                      <ul className="dropdown">
                          <Link to="/products"><button className="btn btn-default dropdown-toggle dropbtn" type="button" data-toggle="dropdown" data-hover="dropdown">Products<span className="caret"></span></button></Link>
                            <ul className="dropdown-menu">
                              <Link to="/cakes"><li className="nav-item"><a href="#" >Cakes</a></li></Link>
                              <Link to="/breadpastry"><li className="nav-item"><a href="#" >Bread & Pastry</a></li></Link>
                              <Link to="/smallbites"><li className="nav-item"><a href="#" >Small Bites</a></li></Link>
                              <Link to="/beverages"><li className="nav-item"><a href="#" >Beverages</a></li></Link>
                            </ul>
                          </ul>

                      <li className="nav-item" role="presentation"><Link to='/store' className="nav-link" >Store</Link></li>



            <ul className="dropdown">

            {withUser}{withoutUser}

              <ul className="dropdown-menu">
              <Link to="/login"><li className="nav-item"><a href="#" >Login</a></li></Link>
              <Link to="/login"><li className="nav-item"><a href="#" >Register</a></li></Link>
              <li className="nav-item"><a href="#" onClick={this.logout} >Logout</a></li>
              </ul>
            </ul>


       </ul>
            </div>
          </div>
      </nav>
      <section className="page-section about-heading">
          <div className="container"><img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="assets/img/about.jpg" />
              <div className="about-heading-content">
                  <div className="row">
                      <div className="col-lg-10 col-xl-9 mx-auto">
                          <div className="bg-faded rounded p-5">

                              <h2 className="section-heading mb-4"><span className="section-heading-upper">About Our Cafe</span></h2>
                              <p>Fresh Bakery & Coffee is a family owned and operated business that started on Hope Street on the East Side of Providence.  We started with a very small staff and have grown to be a team of over 40 amazing, dedicated, hard working people.  Whether a baker who works through the night, a delivery driver who get the goods where they need to go or a barista who makes the best latte around, the team that brings great products to our customers each day is key.  We believe in the products that we make and serve and we believe that the customer should feel like a guest in our home.</p>
                              <p className="mb-0"><span>Thank you to our customers who allow us to do what we love to do each day!</span></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <footer className="footer text-faded text-center py-5">
          <div className="container">
              <p className="m-0 small">Copyright&nbsp;©&nbsp;Fresh Bakery 2018</p>
          </div>
      </footer>


      </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
     //this.props.isAuthenticated
    //ctr: state.counter // this.props.ctr
    token : state.token,
    username : state.username,
    cartcount : state.cartcount

  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
      deleteToken : () => dispatch({type: "DELETETOKEN"})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(About))
