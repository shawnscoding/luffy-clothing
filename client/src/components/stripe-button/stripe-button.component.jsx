import StripeCheckout from "react-stripe-checkout";
import React from "react";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_k11bz90Ot4Y3Ik4JLv01DZz800C6BfNCe4";
  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(res => {
        alert("Payment successful");
      })
      .catch(err => {
        console.log("payment error: ", err);
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card."
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shawn Clothing"
      billingAddress={true}
      shippingAddress={true}
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
