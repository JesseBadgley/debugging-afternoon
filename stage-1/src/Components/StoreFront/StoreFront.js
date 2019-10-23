import React, { Component } from 'react';
import './StoreFront.css';

class StoreFront extends Component {
  render() {
    let productDisplay = this.props.products.map((element, index) => {
      // console.log(element);
      // console.log(index);
      return (
        <div className="product-container" key={index}>
          <h2>{element.title}</h2>
          <img src={element.image} alt="" />
          <h2>{element.desc}</h2>
          <h3>{"$" + element.price + ".00"}</h3>
          <button onClick={() => this.props.addToCartFn(element)}>Purchase!</button>
        </div>
      )
    })
    // console.log(this.props);
    // console.log((productDisplay))
    return (
      <div className="storefront-container">
        {productDisplay}
      </div>
    )
  }
}

export default StoreFront;