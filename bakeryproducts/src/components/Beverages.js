import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import history from '../history';
import axios from 'axios'
import coffee1 from '../assets/img/coffee1.png'
import coffee2 from '../assets/img/coffee2.png'
import coffee3 from '../assets/img/coffee3.png'
import coffee4 from '../assets/img/coffee4.png'
import coffee5 from '../assets/img/coffee5.png'
import coffee6 from '../assets/img/coffee6.png'

class Beverages extends Component {
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


   getMandheling = ()=>{
     let mandhelingObj = {
       title: 'Mandheling Blend',
       description: 'Full bodied to be savor as a thick treat. Traces of chocolate, earthy notes and creamy finish..',
       price: 14.95,
       image: coffee1,
     }
     this.props.sendBeverage(mandhelingObj)
     this.props.history.push('/addtocart')
   }

   getBrightSky = ()=>{
     let brightskyObj = {
       title: 'Bright Sky Coffee',
       description: 'Gentle and well-rounded with hints of nut and nice acidity!',
       price: 16.45,
       image: coffee2,
     }
     this.props.sendBeverage(brightskyObj)
     this.props.history.push('/addtocart')
   }

   getSumatra = ()=>{
     let sumatraObj = {
       title: 'Sumatra Coffee',
       description: 'Full-bodied and smooth with lingering herbal flavors!',
       price: 18.95,
       image: coffee3,
     }
     this.props.sendBeverage(sumatraObj)
     this.props.history.push('/addtocart')
   }

   getSantos = ()=>{
     let santosObj = {
       title: 'Brazil Santos (Mild)',
       description: 'Santos has a special individual flavour and is smooth, full bodied with a little bitterness or acidity..',
       price: 17.85,
       image: coffee4,
     }
     this.props.sendBeverage(santosObj)
     this.props.history.push('/addtocart')
   }

   getColombia = ()=>{
     let colombiaObj = {
       title: 'Colombia Coffee',
       description: 'A smooth coffee with a signature nutty flavor..',
       price: 22.90,
       image: coffee5,
     }
     this.props.sendBeverage(colombiaObj)
     this.props.history.push('/addtocart')
   }

   getVeranda = ()=>{
     let verandaObj = {
       title: 'Veranda Blend',
       description: 'Subtle notes of soft cocoa and lightly toasted nuts!',
       price: 15.95,
       image: coffee6,
     }
     this.props.sendBeverage(verandaObj)
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
                     <h3 className="mb-0 cookieslogan">All you need to feel better, is coffee</h3>
                     <h2 className="text-secondary mb-5" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">Better beans.. Better coffee..</h2>
                 </div>
                 <div className="row no-gutters">
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Mandheling Blend</h3>
                                     <p className="mb-0">Full bodied to be savor as a thick treat. Traces of chocolate, earthy notes and creamy finish..</p>
                                     <button onClick={this.getMandheling} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={coffee1} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">Bright Sky Blend</h3>
                                     <p className="mb-0">Gentle and well-rounded with hints of nut and nice acidity!</p>
                                     <button onClick={this.getBrightSky} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={coffee2} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Sumatra</h3>
                                     <p className="mb-0">Full-bodied and smooth with lingering herbal flavors!</p>
                                     <button onClick={this.getSumatra} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={coffee3} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Brazil Santos (Mild)</h3>
                                     <p className="mb-0">Santos has a special individual flavour and is smooth, full bodied with a little bitterness or acidity..</p>
                                     <button onClick={this.getSantos} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={coffee4} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Colombia</h3>
                                     <p className="mb-0">A smooth coffee with a signature nutty flavor..</p>
                                     <button onClick={this.getColombia} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={coffee5} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Veranda Blend</h3>
                                     <p className="mb-0">Subtle notes of soft cocoa and lightly toasted nuts!</p>
                                     <button onClick={this.getVeranda} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={coffee6} /></a>
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
        sendBeverage : (obj) => dispatch({type: "BEVERAGE", obj: obj})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Beverages))
