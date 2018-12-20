import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import history from '../history';
import axios from 'axios'
import cake1 from '../assets/img/cake1.png'
import cake2 from '../assets/img/cake2.png'
import cake3 from '../assets/img/cake3.png'
import cake4 from '../assets/img/cake4.png'
import cake5 from '../assets/img/cake5.png'
import cake6 from '../assets/img/cake6.png'
import '../assets/bootstrap/css/bootstrap.mini.css'

class Cake extends Component {
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

   getRainbowLayer = ()=>{
     let rainbowObj = {
       title: 'Rainbow Layer Cake',
       description: 'A cake that makes your life sweeter one bite at a time!',
       price: 24.95,
       image: cake1,
     }
     this.props.sendCake(rainbowObj)
     this.props.history.push('/addtocart')
   }

   getRusticBerry = ()=>{
     let rusticObj = {
       title: 'Rustic Berry Cake',
       description: 'A special cake for special occasions, tastes as good as it looks!',
       price: 19.95,
       image: cake2,
     }
     this.props.sendCake(rusticObj)
     this.props.history.push('/addtocart')
   }

   getSmores = ()=>{
     let smoresObj = {
       title: 'Smores Cake',
       description: 'Smores Cake is better than the real thing! A graham cracker cake ..',
       price: 28.95,
       image: cake3,
     }
     this.props.sendCake(smoresObj)
     this.props.history.push('/addtocart')
   }

   getGanache = ()=>{
     let ganacheObj = {
       title: 'Chocolate Ganache Layer Cake',
       description: 'Keebler. Uncommonly Made, Uncommonly Good. Keep the rye balance..',
       price: 20.95,
       image: cake4,
     }
     this.props.sendCake(ganacheObj)
     this.props.history.push('/addtocart')
   }

   getBrown = ()=>{
     let brownObj = {
       title: 'Brown Forest Cake',
       description: 'Several layers of chocolate sponge cake sandwiched with whipped cream and cherries!',
       price: 18.85,
       image: cake5,
     }
     this.props.sendCake(brownObj)
     this.props.history.push('/addtocart')
   }

   getMarshmallowCake = ()=>{
     let marshmallowObj = {
       title: 'Chocolate Cake with Marshmallos',
       description: 'Innovative cakes with elaborate taste. Baked with the mixture of real vanilla and blueberry!',
       price: 17.95,
       image: cake6,
     }
     this.props.sendCake(marshmallowObj)
     this.props.history.push('/addtocart')
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
                     <h2 className="text-secondary mb-5" data-aos="fade-down" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">CAKES</h2>
                 </div>
                 <div className="row no-gutters">
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Rainbow Layer Cake</h3>
                                     <p className="mb-0">A cake that makes your life sweeter one bite at a time!</p>
                                     <button onClick={this.getRainbowLayer} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={cake1} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="zoom-in-left" data-aos-duration="3000" data-aos-delay="200" data-aos-once="true">Rustic Berry Cake</h3>
                                     <p className="mb-0">A special cake for special occasions, tastes as good as it looks!</p>
                                     <button onClick={this.getRusticBerry} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={cake2} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Smores Cake</h3>
                                     <p className="mb-0">Smores Cake is better than the real thing! A graham cracker cake ... </p>
                                     <button onClick={this.getSmores} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={cake3} /></a>
                     </div>
                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Chocolate Ganache Layer Cake</h3>
                                     <p className="mb-0">Keebler. Uncommonly Made, Uncommonly Good. Keep the rye balance..</p>
                                     <button onClick={this.getGanache} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={cake4} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Brown Forest Cake</h3>
                                     <p className="mb-0">Several layers of chocolate sponge cake sandwiched with whipped cream and cherries!</p>
                                     <button onClick={this.getBrown} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={cake5} /></a>
                     </div>

                     <div className="col-lg-6 portfoliobox">
                         <a href="#" className="portfolio-item">
                             <div className="caption sbitebox">
                                 <div className="caption-content">
                                     <h3 data-aos="fade-down-left" data-aos-duration="3000" data-aos-delay="300" data-aos-once="true">Chocolate Cake with Marshmallos</h3>
                                     <p className="mb-0">Innovative cakes with elaborate taste. Baked with the mixture of real vanilla and blueberry!</p>
                                     <button onClick={this.getMarshmallowCake} className="btn-change7">Shop</button>
                                 </div>
                             </div><img className="img-fluid" src={cake6} /></a>
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
    itemCount : state.itemCount
  }
}

// make the dispatches available on local props
// dispatch is used to communicate with the reducer
// so the reducer can change the global state
const mapDispatchToProps = (dispatch) => {
  return {
    // this.props.onIncrementCounter
      deleteToken : () => dispatch({type: "DELETETOKEN"}),
      sendCake : (obj) => dispatch({type: "CAKE", obj: obj})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cake))
