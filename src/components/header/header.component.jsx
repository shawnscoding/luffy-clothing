import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionDiv,
  OptionsContainer
} from "./header.styles";

class Header extends React.Component {
  render() {
    const { currentUser, hidden } = this.props;
    return (
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {currentUser ? (
            <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>
          ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
