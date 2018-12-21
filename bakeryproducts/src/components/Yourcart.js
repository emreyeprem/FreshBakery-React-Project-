import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import {Link, NavLink} from 'react-router-dom'
import axios from 'axios'
import history from '../history';
import Checkout from '../Checkout'

class Yourcart extends Component {
  constructor(props){
    super(props)
    this.state = {
       userproducts : [],
       totalcost: 0
    }
  }
  componentDidMount = ()=>{
    axios.post('http://localhost:3005/api/usercart',{
       userid : this.props.userid
    }).then((response)=>{
      console.log(response.data)
      this.setState({
        ...this.state,
             userproducts: response.data.response,
             totalcost: response.data.sum.toFixed(2)

             })

            this.props.sendQuantity(response.data.sumQuantity)
    })
  }




  render() {

      let useritems = this.state.userproducts.map((each)=>{



        return  <tbody>
            <tr>
            <td className="itemDescription" data-th="Product">
              <div className="row">
                <div className="col-sm-2 hidden-xs"></div>
                <div className="col-sm-10 ">
                  <h4 className="nomargin ">{each.producttitle}</h4>
                  <p className="itemDescription itemDescription2"></p>
                </div>
              </div>
            </td>
            <td className="itemDescription" data-th="Price">{each.price}</td>
            <td className="itemDescription" data-th="Quantity">
              <p className="form-control text-center">{each.quantity}</p>
            </td>
            <td data-th="Subtotal" className="text-center itemDescription">{each.finalprice}</td>
            <td className="actions" data-th="">
              <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
              <button className="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
            </td>
          </tr>
        </tbody>



      })

    return(
        <div className="addCartContainer">
            <h2 className="mycart">Your Shopping Bag</h2>

        <div className="container ">
         <table id="cart" className="table table-hover table-condensed">
          <thead>
          <tr className="trline">
            <th className="thproductcart">Product</th>
            <th className="thprice">Price</th>
            <th className="thquantity">Quantity</th>
            <th className="text-center thsubtotal">Subtotal</th>
            <th className="thlast"></th>
          </tr>
        </thead>

         {useritems}

        <tfoot >
          <tr className="bottomline">
            <Link to='/addtocart'><td><button className="btn btn-warning"><i className="fa fa-angle-left"></i> Go back</button></td></Link>
            <td colspan="2" className="hidden-xs"></td>
            <td className="hidden-xs text-center itemDescription"><strong>Total $ {this.state.totalcost}</strong></td>
            <Checkout name={'FRESH BAKERY'} description={'Happiness Starts Here…'} amount={this.state.totalcost}/>
          </tr>
        </tfoot>
      </table>
  </div>



        </div>
    )
  }
}


// map global state to local props
const mapStateToProps = (state) => {
  return {
      userid: state.userid
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
      sendQuantity : (count) => dispatch({type: "QUANTITY", count: count})

  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Yourcart))
