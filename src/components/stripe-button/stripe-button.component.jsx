import StripeCheckout from "react-stripe-checkout";
import React from "react";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey = "pk_test_k11bz90Ot4Y3Ik4JLv01DZz800C6BfNCe4";
  const onToken = token => {
    console.log(token);
    alert("Payment  Successful");
  };
  return (
    <div>
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
    </div>
  );
};

export default StripeCheckoutButton;
