import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./../../redux/user/user.selector";
import { withRouter } from "react-router-dom";

const CollectionItem = ({ history, currentUser, addItem, item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} alt="clothes" />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price"> {price} </span>
      </div>
      {currentUser ? (
        <CustomButton
          className="custom-button"
          onClick={() => addItem(item)}
          inverted
        >
          Add to cart
        </CustomButton>
      ) : (
        <CustomButton
          onClick={() => history.push("/signin")}
          inverted
          className="custom-button"
        >
          wanna buy?
        </CustomButton>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchProps)(CollectionItem)
);
