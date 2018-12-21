import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import history from '../history';
import axios from 'axios'
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

  logout = ()=>{
    localStorage.clear()
    this.props.deleteToken()
    history.push('/')
   }


   getSandwich = ()=>{
     let sandwichObj = {
       title: 'Sandwich Cookie',
       description: 'A thin rectangular dark chocolate–flavoured biscuits with a chocolate buttercream filling!',
       price: 8.95,
       image: sbite1,
     }
     this.props.sendSmallbites(sandwichObj)
     this.props.history.push('/addtocart')
   }

   getBrownie = ()=>{
     let brownieObj = {
       title: 'Chocolate Brownie',
       description: 'A brownie topped with whipped cream, sprinkled with powdered sugar and fudge!',
       price: 7.95,
       image: sbite2,
     }
     this.props.sendSmallbites(brownieObj)
     this.props.history.push('/addtocart')
   }

    getThumbprint = ()=>{
      let thumbprintObj = {
        title: 'Thumbprint Cookie',
        description: 'Buttery soft cookies with a sweet surprise!',
        price: 5.95,
        image: sbite3,
      }
      this.props.sendSmallbites(thumbprintObj)
      this.props.history.push('/addtocart')
    }

    getChip = ()=>{
      let chipObj = {
        title: 'Chocolate Chip Cookie',
        description: 'A cookie composed of butter and both brown and white sugar, semi-sweet chocolate chips and vanilla..',
        price: 4.99,
        image: sbite4,
      }
      this.props.sendSmallbites(chipObj)
      this.props.history.push('/addtocart')
    }

    getCoconut = ()=>{
      let coconutObj = {
        title: 'Coconut Cookie',
        description: 'A cookie filled with mounds of coconut and chocolate are a delicious treat for the coconut lover!',
        price: 5.49,
        image: sbite5,
      }
      this.props.sendSmallbites(coconutObj)
      this.props.history.push('/addtocart')
    }

    getMuffin = ()=>{
      let muffinObj = {
        title: 'Muffin Cookie',
        description: 'The perfect breakfast treat! Baked with the mixture of real strawberry and blueberry!',
        price: 6.49,
        image: sbite6,
      }
      this.props.sendSmallbites(muffinObj)
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
                                     <button onClick={this.getSandwich} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite1} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">Chocolate Brownie</h3>
                                     <p className="mb-0">A brownie topped with whipped cream, sprinkled with powdered sugar and fudge!</p>
                                     <button onClick={this.getBrownie} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite2} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Thumbprint Cookie</h3>
                                     <p className="mb-0">Buttery soft cookies with a sweet surprise!</p>
                                     <button onClick={this.getThumbprint} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite3} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Chocolate Chip Cookie</h3>
                                     <p className="mb-0">A cookie composed of butter and both brown and white sugar, semi-sweet chocolate chips and vanilla..</p>
                                     <button onClick={this.getChip} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite4} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Coconut Cookie</h3>
                                     <p className="mb-0">A cookie filled with mounds of coconut and chocolate are a delicious treat for the coconut lover!</p>
                                     <button onClick={this.getCoconut} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={sbite5} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Muffin Cookie</h3>
                                     <p className="mb-0">The perfect breakfast treat! Baked with the mixture of real strawberry and blueberry!</p>
                                     <button onClick={this.getMuffin} className="btn-change7">Shop</button>
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
          sendSmallbites : (obj) => dispatch({type: "SMALLBITES", obj: obj})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Smallbites))
