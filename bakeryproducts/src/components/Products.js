import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import cake from '../assets/img/cake.png'
import breadpastry from '../assets/img/productimg2.png'
import cookies from '../assets/img/cookies.png'

class Products extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {


    return(
      <div>


      <h1 className="text-center text-white d-none d-lg-block site-heading" data-aos="zoom-in-up" data-aos-duration="3000" data-aos-delay="300"><span className="text-monospace text-capitalize text-center text-primary site-heading-upper mb-3 tart" data-aos="slide-right" data-aos-duration="2000" data-aos-delay="100"><em>Our products are&nbsp;gluten &nbsp;free</em></span>
          <span
              className="shadow site-heading-lower headingP" data-aos="flip-down" data-aos-duration="3000" data-aos-once="true">MADE WITH LOVE</span>
      </h1>

      <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4 navbar-Container" id="mainNav">
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
                <li className="nav-item"><a href="#" >Login</a></li>
                <li className="nav-item"><a href="#" >Register</a></li>
              </ul>
            </ul>


       </ul>
            </div>
          </div>
      </nav>


      <section className="page-section">
          <div className="container">
              <div className="product-item">
                  <div className="d-flex product-item-title">
                      <Link to="/beverages"><div className="d-flex mr-auto bg-faded p-5 rounded">
                          <h2 className="section-heading mb-0 titleContainer"><span className="section-heading-upper">Blended to Perfection</span><span className="section-heading-lower">Coffees</span></h2>
                      </div></Link>
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
                          <Link to="/cakes"><h2 className="section-heading mb-0 titleContainer"><span className="section-heading-upper">Delicious Treats, Good Eats</span><span className="section-heading-lower">Cakes</span></h2></Link>
                      </div>
                  </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src={cake} />
                  <div className="bg-faded p-5 rounded">
                      <p className="mb-0">Chocolate Truffle Torte... with deep chocolate flavor and a creamy texture.
                        Cinnamon Coffee Cake... a golden loaf with a hint of cinnamon and cacao nibs for a delicate crunch. Pear Cranberry Coffee Cake... with a hint of rum and a finely-textured crumb topping.
                        Salted Caramel Cheesecake... a creamy combination of salty and sweet in a dairy-free cheesecake.</p>
                  </div>
              </div>
          </div>
      </section>
      <section className="page-section">
          <div className="container">
              <div className="product-item">
                  <div className="d-flex product-item-title">
                      <div className="d-flex mx-auto bg-faded p-5 rounded">
                          <Link to="/breadpastry"><h2 className="section-heading mb-0 titleContainer"><span className="section-heading-upper">From Around the World</span><span className="section-heading-lower">Bread &amp; Pastry</span></h2></Link>
                      </div>
                  </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src={breadpastry} />
                  <div className="bg-faded p-5 rounded">
                      <p className="mb-0">Our ovens are rolling and the start of a carefully orchestrated morning of fermentation, jazz, rock & roll, and mixing begins. The bakery represents a cycle of production utilizing natural processes to transform humble ingredients into complex and nourishing breads and pastries. We specialize in naturally leavened, ie sourdough, breads using Wisconsin grown wheat, rye, and corn.</p>
                  </div>
              </div>
          </div>
      </section>

      <section className="page-section">
          <div className="container">
              <div className="product-item">
                  <div className="d-flex product-item-title">
                      <div className="d-flex mr-auto bg-faded p-5 rounded">
                          <Link to="/smallbites"><h2 className="section-heading mb-0 titleContainer"><span className="section-heading-upper">Cookies &amp; Brownies</span><span className="section-heading-lower">Cakes</span></h2></Link>
                      </div>
                  </div><img className="img-fluid d-flex mx-auto product-item-img mb-3 mb-lg-0 rounded" src={cookies} />
                  <div className="bg-faded p-5 rounded">
                      <p className="mb-0">Almond Cookies… our award-winning cookie, with a crunchy exterior and a moist center.
                      Brownies… an indulgent, no-holds-barred brownie studded with Belgian chocolate chips.
                      Chocolate Chip Cookies… like your favorite aunt used to make. Okay, maybe a little better
                      Coconut Pecan Chewies… the chocolate chip cookie meets the coconut macaroon</p>
                  </div>
              </div>
          </div>
      </section>

      <footer className="footer text-faded text-center py-5">
          <div className="container">
              <p className="m-0 small">Copyright&nbsp;©&nbsp;Fresh Bakery & Coffee 2018</p>
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
