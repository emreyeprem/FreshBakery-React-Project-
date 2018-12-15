import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {


    return(
      <div>

      <h1 className="text-center text-white d-none d-lg-block site-heading"><span className="text-primary site-heading-upper mb-3">A Free Bootstrap 4 Business Theme&nbsp;</span><span className="site-heading-lower">Business Casual</span></h1>
      <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4" id="mainNav">
          <div className="container"><a className="navbar-brand text-uppercase d-lg-none text-expanded" href="#">Fresh Bakery</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
              <div
                  className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="nav navbar-nav mx-auto">
                      <li className="nav-item" role="presentation"><a className="nav-link" href="index.html">Home</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="about.html">About us</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="products.html">Products</a></li>
                      <li className="nav-item" role="presentation"><a className="nav-link" href="store.html">Store</a></li>
                  </ul>
          </div>
          </div>
      </nav>
      <section className="page-section">
          <div className="container">
              <div className="product-item">
                  <div className="d-flex product-item-title">
                      <div className="d-flex mr-auto bg-faded p-5 rounded">
                          <h2 className="section-heading mb-0"><span className="section-heading-upper">Blended to Perfection</span><span className="section-heading-lower">Coffees &amp; Teas</span></h2>
                      </div>
                  </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src="assets/img/products-01.jpg" />
                  <div className="bg-faded p-5 rounded">
                      <p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it is our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something
                          as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="page-section">
          <div className="container">
              <div className="product-item">
                  <div className="d-flex product-item-title">
                      <div className="d-flex ml-auto bg-faded p-5 rounded">
                          <h2 className="section-heading mb-0"><span className="section-heading-upper">Delicious Treats, Good Eats</span><span className="section-heading-lower">Bakery &amp; Kitchen</span></h2>
                      </div>
                  </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src="assets/img/products-02.jpg" />
                  <div className="bg-faded p-5 rounded">
                      <p className="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="page-section">
          <div className="container">
              <div className="product-item">
                  <div className="d-flex product-item-title">
                      <div className="d-flex mx-auto bg-faded p-5 rounded">
                          <h2 className="section-heading mb-0"><span className="section-heading-upper">From Around the World</span><span className="section-heading-lower">Bulk Speciality Blends</span></h2>
                      </div>
                  </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src="assets/img/products-03.jpg" />
                  <div className="bg-faded p-5 rounded">
                      <p className="mb-0">Travelling the world for the very best quality coffee is something take pride in. When you visit us, you will always find new blends from around the world, mainly from regions in Central and South America. We sell our blends in smaller
                          to large bulk quantities. Please visit us in person for more details.</p>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Products))
