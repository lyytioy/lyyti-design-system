import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandCorner = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.707 6.707a1 1 0 000-1.414l-5-5A1 1 0 0017 1v3.5a.25.25 0 01-.25.25H8A3.254 3.254 0 004.75 8v8.75a.25.25 0 01-.25.25H1a1 1 0 00-.707 1.707l5 5a1 1 0 001.414 0l5-5A1 1 0 0011 17H7.5a.25.25 0 01-.25-.25V8A.751.751 0 018 7.25h8.75a.25.25 0 01.25.25V11a1 1 0 00.617.923A.989.989 0 0018 12a1 1 0 00.707-.293z" />
  );

export default SvgExpandCorner;
