import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckSquare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9 17.999a.496.496 0 01-.354-.147l-5-5a.5.5 0 11.708-.707l4.607 4.606L21.11 1.685a.497.497 0 01.702-.075.5.5 0 01.075.703l-12.5 15.5a.5.5 0 01-.362.185L9 17.999z" />,
    <path d="M1.5 24C.672 24 0 23.327 0 22.5v-16C0 5.673.672 5 1.5 5H13a.5.5 0 010 1H1.5a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h16a.5.5 0 00.5-.5V12a.5.5 0 011 0v10.5c0 .827-.673 1.5-1.5 1.5h-16z" />
  );

export default SvgCheckSquare;
