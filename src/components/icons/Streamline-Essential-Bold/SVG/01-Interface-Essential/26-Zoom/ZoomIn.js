import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZoomIn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.414 20.59l-5.077-5.077a10.019 10.019 0 10-2.828 2.828l5.077 5.077a2.023 2.023 0 002.828 0 2 2 0 000-2.828zM10 1.754A8.25 8.25 0 111.75 10 8.26 8.26 0 0110 1.754z" />,
    <path d="M10 16.754A6.75 6.75 0 103.25 10 6.758 6.758 0 0010 16.754zM7 9h2V7a1 1 0 112 0v2h2a1 1 0 010 2h-2v2a1 1 0 01-2 0v-2H7a1 1 0 110-2z" />
  );

export default SvgZoomIn;
