import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {


    return(
      <div classNameName="homepageContainer">

      <h1 className="text-center text-white d-none d-lg-block site-heading" data-aos="zoom-in-up" data-aos-duration="3000" data-aos-delay="300"><span className="text-monospace text-capitalize text-center text-secondary site-heading-upper mb-3 tart" data-aos="slide-right" data-aos-duration="2000" data-aos-delay="100"><em>The &nbsp;Little &nbsp;Tart</em></span>
          <span
              className="shadow site-heading-lower heading" data-aos="flip-down" data-aos-duration="3000" data-aos-once="true">FRESH BAKERY &amp; Coffee</span>
      </h1>

      <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4" id="mainNav">
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Fresh Bakery</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div
                  className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="nav navbar-nav mx-auto">
                      <li className="nav-item" role="presentation"><a className="nav-link" href="/">Home</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="about">About us</a></li>


        <ul className="dropdown">
            <Link to="/products"><button className="btn btn-default dropdown-toggle dropbtn" type="button" data-toggle="dropdown" data-hover="dropdown">Products<span className="caret"></span></button></Link>
              <ul className="dropdown-menu">
                  <Link to="/cakes"><li className="nav-item"><a href="#" >Cakes</a></li></Link>
                  <Link to="/breadpastry"><li className="nav-item"><a href="#" >Bread & Pastry</a></li></Link>
                  <Link to="/smallbites"><li className="nav-item"><a href="#" >Small Bites</a></li></Link>
                  <Link to="/beverages"><li className="nav-item"><a href="#" >Beverages</a></li></Link>
              </ul>
            </ul>

                      <li className="nav-item" role="presentation"><a className="nav-link" href="store">Store</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="store">Shop</a></li>


            <ul className="dropdown">
              <button className="btn btn-default dropdown-toggle dropbtn" type="button" data-toggle="dropdown" data-hover="dropdown">
               My Account <span className="caret"></span>
              </button>
              <ul className="dropdown-menu">
                <Link to="/login"><li className="nav-item"><a href="#" >Login</a></li></Link>
                <li className="nav-item"><a href="#" >Register</a></li>
              </ul>
            </ul>


       </ul>
            </div>
          </div>
      </nav>

      <section className="page-section clearfix">
          <div className="container">
              <div className="intro"><img className="img-fluid intro-img mb-3 mb-lg-0 rounded" src="assets/img/Screen%20Shot%202018-12-14%20at%2010.24.59%20AM.png"/>
                  <div className="intro-text left-0 text-centerfaded p-5 rounded bg-faded text-center">
                      <h2 className="section-heading mb-4"><span className="section-heading-upper">Fresh Coffee</span><span className="section-heading-lower">Worth Drinking</span></h2>
                      <p className="mb-3">Every cup of our quality artisan coffee starts with locally sourced, hand picked ingredients. Once you try it, our coffee will be a blissful addition to your everyday morning routine - we guarantee it!</p>
                      <div className="mx-auto intro-button"><a className="btn btn-primary d-inline-block mx-auto btn-xl" role="button" href="#">Visit Us Today!</a></div>
                  </div>
              </div>
          </div>
      </section>
      <section className="page-section cta">
          <div className="container">
              <div className="row">
                  <div className="col-xl-9 mx-auto">
                      <div className="cta-inner text-center rounded">
                          <h2 className="section-heading mb-4"><span className="section-heading-upper">Our Promise</span><span className="section-heading-lower">To You</span></h2>
                          <p className="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied,
                              please let us know and we will do whatever we can to make things right!</p>
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
  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter


  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HomePage))
