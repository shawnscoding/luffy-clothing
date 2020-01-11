import React from "react";
import "./not-found.styles.scss";
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText
} from "./../error-boundary/error-boundary.styles";

const NotFound = () => {
  return (
    <ErrorImageOverlay>
      <ErrorImageContainer imageUrl="https://i.imgur.com/Q2BAOd2.png" />
      <ErrorImageText>
        Sorry, we've looked everywhere but couldn't find this.
      </ErrorImageText>
    </ErrorImageOverlay>
  );
};
export default NotFound;
