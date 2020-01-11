import "./cart-dropdown.styles.scss";

import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import CartItem from "./../cart-item/cart-item.component";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCurrentUser } from "../../redux/user/user.selector";

const CartDropdown = ({ cartItems, history, dispatch, currentUser }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {currentUser ? (
        <CustomButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CustomButton>
      ) : (
        <CustomButton
          onClick={() => {
            history.push("/signin");
            dispatch(toggleCartHidden());
          }}
        >
          LOG IN NOW
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
