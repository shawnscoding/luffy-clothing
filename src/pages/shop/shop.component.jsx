import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";
import { updateCollections } from "./../../redux/shop/shop.actions";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };

  // unsubscribeFromSnapshot = null;
  async componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    try {
      const collectionSnapshot = await collectionRef.get();
      const collectionsMap = await convertCollectionsSnapshotToMap(
        collectionSnapshot
      );
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    } catch (err) {
      console.log(err);
    }
    // collectionRef.onSnapshot(async snapshot => {
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
