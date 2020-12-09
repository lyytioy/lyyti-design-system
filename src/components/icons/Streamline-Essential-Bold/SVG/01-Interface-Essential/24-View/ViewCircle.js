import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm0 17c-5.279 0-8.178-4.542-8.3-4.735a.5.5 0 010-.53C3.822 11.542 6.721 7 12 7s8.178 4.542 8.3 4.735a.5.5 0 010 .53C20.178 12.458 17.279 17 12 17z" />,
    <path d="M16 12a4 4 0 10-4 4 4 4 0 004-4zm-4 1.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />
  );

export default SvgViewCircle;
