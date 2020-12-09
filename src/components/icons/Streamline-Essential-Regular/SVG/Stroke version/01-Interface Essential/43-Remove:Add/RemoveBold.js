import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M15.823 1.805L12 5.628 8.177 1.805a3.605 3.605 0 00-5.1 0L1.806 3.079a3.6 3.6 0 000 5.1L5.629 12l-3.823 3.822a3.6 3.6 0 000 5.1l1.274 1.272a3.605 3.605 0 005.1 0L12 18.371l3.823 3.823a3.605 3.605 0 005.1 0l1.274-1.274a3.6 3.6 0 000-5.1L18.372 12l3.822-3.824a3.6 3.6 0 000-5.1L20.92 1.805a3.605 3.605 0 00-5.097 0z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgRemoveBold;
