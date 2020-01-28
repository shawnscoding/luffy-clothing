import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component.jsx";
import NotFound from "./components/not-found/not-found.component.jsx";

const Homepage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = props => {
  const { currentUser, checkUserSession, history } = props;
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/(.+)"
            render={() => (
              <React.Fragment>
                <Switch>
                  <Route path="/shop" component={ShopPage} />
                  <Route
                    exact
                    path="/checkout"
                    render={() =>
                      currentUser ? <CheckoutPage /> : <Redirect to="/" />
                    }
                  />
                  <Route
                    exact
                    path="/signin"
                    render={() =>
                      currentUser ? (
                        <Redirect
                          to={history ? history.goBack() : <NotFound />}
                        />
                      ) : (
                        <SignInAndSignUpPage />
                      )
                    }
                  />
                  <Route component={NotFound} />
                </Switch>
              </React.Fragment>
            )}
          />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
