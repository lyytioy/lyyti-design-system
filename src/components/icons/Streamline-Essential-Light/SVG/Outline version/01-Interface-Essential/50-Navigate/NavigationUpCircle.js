import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationUpCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 23.498c-6.341 0-11.5-5.159-11.5-11.5S5.659.498 12 .498s11.5 5.159 11.5 11.5-5.159 11.5-11.5 11.5zm0-22c-5.79 0-10.5 4.71-10.5 10.5s4.71 10.5 10.5 10.5 10.5-4.71 10.5-10.5-4.71-10.5-10.5-10.5z" />,
    <path d="M12 18.498a.5.5 0 01-.5-.5V6.205L7.854 9.852A.5.5 0 017 9.498a.5.5 0 01.146-.354l4.5-4.5A.495.495 0 0112 4.498a.5.5 0 01.354.146l4.5 4.5a.501.501 0 01-.708.708L12.5 6.205v11.793a.5.5 0 01-.5.5z" />
  );

export default SvgNavigationUpCircle;
