import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.5 24A6.508 6.508 0 010 17.5v-9C0 6.57 1.57 5 3.5 5h2.529A5.489 5.489 0 0111.5 0C14.533 0 17 2.467 17 5.5V8c0 1.654 1.346 3 3 3s3-1.346 3-3V.5a.5.5 0 011 0V8c0 2.206-1.794 4-4 4s-4-1.794-4-4V5.5C16 3.019 13.981 1 11.5 1a4.494 4.494 0 00-4.466 4H9.5C11.43 5 13 6.57 13 8.5v9c0 3.584-2.916 6.5-6.5 6.5zM1 17.5C1 20.533 3.467 23 6.5 23s5.5-2.467 5.5-5.5V11H1v6.5zM12 10V8.5C12 7.121 10.879 6 9.5 6H7v4h5zm-6 0V6H3.5A2.502 2.502 0 001 8.5V10h5z" />
  );

export default SvgMouse;
