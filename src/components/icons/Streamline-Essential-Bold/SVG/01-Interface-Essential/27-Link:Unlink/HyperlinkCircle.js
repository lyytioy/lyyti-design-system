import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlinkCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.348 0a8.653 8.653 0 00-7.154 3.783 1 1 0 101.653 1.126 6.652 6.652 0 11-.736 6.062 1 1 0 10-1.875.7A8.653 8.653 0 1015.348 0z" />,
    <path d="M14.153 19.089a6.651 6.651 0 11.82-5.821 1 1 0 101.9-.625 8.654 8.654 0 10-1.068 7.572 1 1 0 10-1.653-1.126z" />
  );

export default SvgHyperlinkCircle;
