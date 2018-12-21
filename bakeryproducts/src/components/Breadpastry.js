import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import history from '../history';
import axios from 'axios'
import pastry1 from '../assets/img/pastry1.png'
import pastry2 from '../assets/img/pastry2.png'
import pastry3 from '../assets/img/pastry3.png'
import pastry4 from '../assets/img/pastry4.png'
import pastry5 from '../assets/img/pastry5.png'
import pastry6 from '../assets/img/pastry6.png'
import '../assets/bootstrap/css/bootstrap.mini.css'

class Breadpastry extends Component {
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


   getBreadcone = ()=>{
     let breadconeObj = {
       title: 'Bread Cones',
       description: 'The fun food.. Lay cones on a baking sheet sprayed with non-stick spray.',
       price: 5.95,
       image: pastry1,
     }
     this.props.sendPastry(breadconeObj)
     this.props.history.push('/addtocart')
   }

   getPastrybread = ()=>{
     let pastrybreadObj = {
       title: 'Pastry Bread',
       description: 'Brighten up the morning by serving up any one of these delectable bread and pastry recipes for breakfast or brunch.',
       price: 6.95,
       image: pastry2,
     }
     this.props.sendPastry(pastrybreadObj)
     this.props.history.push('/addtocart')
   }

   getFrench = ()=>{
     let frenchObj = {
       title: 'Classic French Raisin',
       description: 'Pain aux raisin warm from the oven is a delight of French patisserie...',
       price: 8.75,
       image: pastry3,
     }
     this.props.sendPastry(frenchObj)
     this.props.history.push('/addtocart')
   }

   getPainau = ()=>{
     let painauObj = {
       title: 'Pain Au Chocolat',
       description: 'Uncommonly Made! Layer upon layer of light, butter flaky pastry..',
       price: 7.95,
       image: pastry4,
     }
     this.props.sendPastry(painauObj)
     this.props.history.push('/addtocart')
   }

   getJewishrye = ()=>{
     let jewishryeObj = {
       title: 'Jewish Rye Bread',
       description: 'Made with caraway seeds and various proportions of flour from rye grain.',
       price: 4.95,
       image: pastry5,
     }
     this.props.sendPastry(jewishryeObj)
     this.props.history.push('/addtocart')
   }

   getArtisan = ()=>{
     let artisanObj = {
       title: 'Artisan Gluten Free Bread',
       description: 'It uses no gums, doesn’t require eggs, and allows you to make a crusty, artisan style loaf of bread!',
       price: 4.50,
       image: pastry6,
     }
     this.props.sendPastry(artisanObj)
     this.props.history.push('/addtocart')
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
         <div className="smbiteContainer">


         <nav className="navbar navbar-light navbar-expand-lg bg-dark py-lg-4 navbar-Container" id="mainNav">
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




         <section id="portfolio" className="content-section sbportDiv">
             <div className="container">
                 <div className="content-section-heading text-center">
                     <h3 className="mb-0 cookieslogan">A special cake for a special day</h3>
                     <h2 className="text-secondary mb-5" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">BREAD &amp; PASTRY</h2>
                 </div>
                 <div className="row no-gutters">
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Bread Cones</h3>
                                     <p className="mb-0">Switch up your boring dinner plans and serve it in a bread cone! The fun food.. Lay cones on a baking sheet sprayed with non-stick spray.</p>
                                     <button onClick={this.getBreadcone} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={pastry1} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">Pastry Bread</h3>
                                     <p className="mb-0">Brighten up the morning by serving up any one of these delectable bread and pastry recipes for breakfast or brunch.</p>
                                     <button onClick={this.getPastrybread} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={pastry2} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Classic French Raisin</h3>
                                     <p className="mb-0">Pain aux raisin warm from the oven is a delight of French patisserie...</p>
                                     <button onClick={this.getFrench} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={pastry3} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Pain Au Chocolat</h3>
                                     <p className="mb-0">Uncommonly Made! Layer upon layer of light, butter flaky pastry..</p>
                                     <button onClick={this.getPainau} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={pastry4} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Jewish Rye Bread</h3>
                                     <p className="mb-0">Made with caraway seeds and various proportions of flour from rye grain.</p>
                                     <button onClick={this.getJewishrye} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={pastry5} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Artisan Style Gluten Free Bread</h3>
                                     <p className="mb-0">It uses no gums, doesn’t require eggs, and allows you to make a crusty, artisan style loaf of bread!</p>
                                     <button onClick={this.getArtisan} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={pastry6} /></a>
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

      deleteToken : () => dispatch({type: "DELETETOKEN"}),
        sendPastry : (obj) => dispatch({type: "PASTRY", obj: obj})
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Breadpastry))
