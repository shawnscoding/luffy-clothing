import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

class Header extends React.Component {
  componentDidMount() {
    console.log("in header.jsx, ComDidMount");
    console.log("in header.jsx, currentUser", this.props.currentUser);
  }

  componentDidUpdate() {
    console.log("in header.jsx ComDidUpdate");
    console.log("in header.jsx, currentUser", this.props.currentUser);
  }

  render() {
    const { currentUser, hidden } = this.props;
    console.log("in header.jsx, render");
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
