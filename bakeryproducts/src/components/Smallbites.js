import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import sbite1 from '../assets/img/sbite1.png'
import sbite2 from '../assets/img/sbite2.png'
import sbite3 from '../assets/img/sbite3.png'
import sbite4 from '../assets/img/sbite4.png'
import sbite5 from '../assets/img/sbite5.png'
import sbite6 from '../assets/img/sbite6.png'
import '../assets/bootstrap/css/bootstrap.mini.css'

class Smallbites extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {


    return(
         <div className="smbiteContainer">


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




         <section id="portfolio" className="content-section sbportDiv">
             <div className="container">
                 <div className="content-section-heading text-center">
                     <h3 className="mb-0 cookieslogan">Freshly Baked All Day.. Every Day..</h3>
                     <h2 className="text-secondary mb-5" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">COOKIES &amp; BROWNIES</h2>
                 </div>
                 <div className="row no-gutters">
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Sandwich Cookie</h3>
                                     <p className="mb-0">A thin rectangular dark chocolate–flavoured biscuits with a chocolate buttercream filling!</p>
                                     <button class="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite1} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">Chocolate Brownie</h3>
                                     <p className="mb-0">A brownie topped with whipped cream, sprinkled with powdered sugar and fudge!</p>
                                     <button class="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite2} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Thumbprint Cookie</h3>
                                     <p className="mb-0">Buttery soft cookies with a sweet surprise!</p>
                                     <button class="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite3} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Chocolate Chip Cookie</h3>
                                     <p className="mb-0">A cookie composed of butter and both brown and white sugar, semi-sweet chocolate chips and vanilla..</p>
                                     <button class="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite4} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Coconut Cookie</h3>
                                     <p className="mb-0">A cookie filled with mounds of coconut and chocolate are a delicious treat for the coconut lover!</p>
                                     <button class="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite5} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Muffin Cookie</h3>
                                     <p className="mb-0">The perfect breakfast treat! Baked with the mixture of real strawberry and blueberry!</p>
                                     <button class="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite6} /></a>
                     </div>


                 </div>
             </div>
         </section>

         <footer className="footer text-faded text-center py-5 footerContainerSB">
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Smallbites))
