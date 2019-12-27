import React, { Component } from "react";
import SHOP_DATA from "./shope.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };

  componentDidMount() {
    console.log("in ShopPage.jsx ComDidMount");
  }

  componentDidUpdate() {
    console.log("in ShopPage.jsx ComDidUpdate");
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
