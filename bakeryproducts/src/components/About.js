import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'

class About extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {


    return(
      <div>

      <h1 className="text-center text-white d-none d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3 tart">Our inspiration comes from you..&nbsp;</span><span className="site-heading-lower heading">FRESH BAKERY &amp; Coffee</span></h1>
      <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4" id="mainNav">
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Fresh Bakery</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div
                  className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="nav navbar-nav mx-auto">
                      <li className="nav-item" role="presentation"><a className="nav-link" href="/">Home</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="about">About us</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="products">Products</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="store">Store</a></li>

              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown">
                 Products <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li className="dropdown">
                    <a href="#">One more dropdown</a>
                    <ul className="dropdown-menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li className="dropdown">
                        <a href="#">One more dropdown</a>
                        <ul className="dropdown-menu">
                        ...
                        </ul>
                      </li>
                      <li><a href="#">Something else here</a></li>
                      <li><a href="#">Separated link</a></li>
                     </ul>
                  </li>
                  <li><a href="#">Something else here</a></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>


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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(About))
