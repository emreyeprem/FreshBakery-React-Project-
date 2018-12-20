import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import history from '../history';
import axios from 'axios'
import store from '../assets/img/stores.png'
import bakery from '../assets/img/bakery5.png'

class Store extends Component {
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
            <Link to='/yourcart'><i className="fa fa-shopping-cart number">{this.props.itemCount}</i></Link>
            </span></div>
    } else {
       withoutUser= <button className="btn btn-default dropdown-toggle dropbtn" type="button" data-toggle="dropdown" data-hover="dropdown">
         My Account <span className="caret"></span></button>
    }

    return(
      <div>


      <h1 className="text-center text-white d-none d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3 tart">A little bliss in every bite since 1987...&nbsp;</span><span className="site-heading-lower heading"><img className="img-fluid rounded about-heading-img mb-3 mb-lg-0 store-title-imgS" src={bakery} /></span></h1>

      <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4 navbar-ContainerS" id="mainNav">
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


      <section className="page-section cta work-schedule">
          <div className="container">
              <div className="row">
                  <div className="col-xl-9 mx-auto">
                      <div className="cta-inner text-center rounded">
                          <h2 className="section-heading mb-5"><span className="section-heading-upper">Come On In</span><span className="section-heading-lower">We are Open</span></h2>
                          <ul className="list-unstyled mx-auto list-hours mb-5 text-left store-hours">
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Sunday<span className="ml-auto">Closed</span></li>
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Monday<span className="ml-auto">7:00 AM to 8:00 PM</span></li>
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Tuesday<span className="ml-auto">7:00 AM to 8:00 PM</span></li>
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Wednesday<span className="ml-auto">7:00 AM to 8:00 PM</span></li>
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Thursday<span className="ml-auto">7:00 AM to 8:00 PM</span></li>
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Friday<span className="ml-auto">7:00 AM to 8:00 PM</span></li>
                              <li className="d-flex list-unstyled-item list-hours-item store-hours">Saturday<span className="ml-auto">9:00 AM to 5:00 PM</span></li>
                          </ul>
                          <p className="address mb-5"><em><strong>1116 Orchard Street</strong><span><br />Golden Valley, Texas</span></em></p>
                          <p className="address mb-0"><small><em>Call Anytime</em></small><span><br />(557) 585-8468</span></p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <section className="page-section about-heading">
          <div className="container"><img className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={store} />
              <div className="about-heading-content">
                  <div className="row">
                      <div className="col-lg-10 col-xl-9 mx-auto">
                          <div className="bg-faded rounded p-5">
                              <h2 className="section-heading mb-4"><span className="section-heading-upper">FREQUENTLY ASKED QUESTIONS</span><span className="section-heading-lower">&nbsp;About Our Products</span></h2>
                              <p><h4>Are all of your products gluten free?</h4>Yes. Our kitchen is a dedicated gluten free facility. Our products are recommended by the Celiac Disease Center at Columbia University.
                              <h4>Are all of your products dairy free?</h4> Yes. There’s milk for the coffee, but you won’t find any dairy products in the FB&C kitchen. In fact, our baked goods are certified kosher pareve.</p>
                              <p className="mb-0"><span><h4>What ingredients do you use instead of wheat and dairy?</h4> in&nbsp;</span><em>lust</em><span>&nbsp; We make our own gluten free flour mix and use various dairy alternatives, depending on the product. We have a list of ingredients and allergens for each product available for your review at each of our locations..</span></p>
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
    itemCount : state.itemCount
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Store))
