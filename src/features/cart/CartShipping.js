import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addShipping, removeShipping } from './cartSlice';

const mapDispatch = { addShipping, removeShipping };

class CartTotal extends Component {

  constructor(props) {
    super(props);

    this.shippingRef = React.createRef();
  }

  componentWillUnmount() {
    if (this.shippingRef.checked) {
      this.props.removeShipping()
    }
  }

  handleChecked = (e) => {
    e.target.checked ? this.props.addShipping() : this.props.removeShipping()
  }

  render() {
    return (
      <>
        <div className="collection">
          <li className="collection-item">
            <label>
              <input type="checkbox" className="filled-in" ref={this.shippingRef} onChange={this.handleChecked}/>
              <span>Add Shipping (£6)</span>
            </label>
          </li>
        </div>
      </>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    addedItems: state.cart.addedItems,
    total: state.cart.total
  }
}

export default connect(mapStateToProps, mapDispatch)(CartTotal)
