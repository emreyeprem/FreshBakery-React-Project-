import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import '../assets/bootstrap/css/bootstrap.min.css'
import '../assets/bootstrap/css/homepage.css'
import {Link, NavLink} from 'react-router-dom'
import history from '../history';
import axios from 'axios'

class Addtocart extends Component {
  constructor(props){
    super(props)
    this.state = {
      quantity : 1,
      finalprice : this.props.obj.price

    }
  }

  addQuantity = (e) =>{
    this.setState({
      quantity : e.target.value

    },(()=>{
      let totalPrice = this.state.quantity * this.props.obj.price
      console.log(totalPrice)
      this.setState({
        ...this.state,
        totalprice: totalPrice,
        finalprice: totalPrice.toFixed(2)

      })
    }))
  }

  addItemButton = () =>{
  let newItemCount = this.props.cartcount + 1
  this.props.getNewItemCount(newItemCount)
  axios.post('http://localhost:3005/api/sendcart',{
     title : this.props.obj.title,
     quantity : this.state.quantity,
     userid : this.props.userid,
     price : this.props.obj.price,
     finalprice : this.state.finalprice
  }).then((response)=>{
     console.log(response)
     this.props.history.push('/yourcart')
  })

  }




  render() {


    return(
      <div className="addCartContainer">


      <div className="container ">
       <table id="cart" className="table table-hover table-condensed">
        <thead>
        <tr className="trline">
          <th className="thproduct">Product</th>
          <th className="thprice">Price</th>
          <th className="thquantity">Quantity</th>
          <th className="text-center thsubtotal">Subtotal</th>
          <th className="thlast"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="itemDescription" data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs"><img src={this.props.obj.image} alt="cartImage" className="img-responsive cartitemimg"/></div>
              <div className="col-sm-10 ">
                <h4 className="nomargin itemDescription itemDescription2">{this.props.obj.title}</h4>
                <p className="itemDescription itemDescription2">{this.props.obj.description}</p>
              </div>
            </div>
          </td>
          <td className="itemDescription" data-th="Price">{this.props.obj.price}</td>
          <td className="itemDescription" data-th="Quantity">
            <input onChange={this.addQuantity} type="number" className="form-control text-center" placeholder="1" name="quantity" min="1" />
          </td>
          <td data-th="Subtotal" className="text-center itemDescription">{this.state.finalprice}</td>
          <td className="actions" data-th="">
            <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o"></i></button>
          </td>
        </tr>
      </tbody>
      <tfoot>

        <tr>
          <td><Link to='/products'><button className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</button></Link></td>
          <td colspan="2" className="hidden-xs"></td>
          <td className="hidden-xs text-center itemDescription"><strong>Total ${this.state.finalprice}</strong></td>
          <td><button onClick={this.addItemButton} className="btn btn-success btn-block addtocartButton">Add to Cart <i className="fa fa-angle-right"></i></button></td>
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
      obj : state.Obj,
      userid : state.userid,
      cartcount : state.cartcount
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

      getNewItemCount : (count) => dispatch({type: "UPDATEITEMCOUNT",itemCount: count})
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Addtocart))
