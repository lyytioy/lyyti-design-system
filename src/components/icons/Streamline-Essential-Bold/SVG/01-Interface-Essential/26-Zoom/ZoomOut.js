import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomOut = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.414 20.585l-5.077-5.077a10.019 10.019 0 10-2.828 2.828l5.077 5.077a2 2 0 102.828-2.828zM10 1.749A8.25 8.25 0 111.75 10 8.259 8.259 0 0110 1.749z" />,
    <path d="M10 16.749A6.75 6.75 0 103.25 10 6.758 6.758 0 0010 16.749zM7 9h6a1 1 0 010 2H7a1 1 0 010-2z" />
  );

export default SvgZoomOut;
