import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.5 19a.5.5 0 01-.354-.146l-3-3a.502.502 0 01-.001-.708l3-3a.503.503 0 01.709 0 .5.5 0 010 .708L6.707 15H13.5a.5.5 0 010 1H6.707l2.146 2.146A.5.5 0 018.5 19zM15.5 12a.5.5 0 01-.354-.853L17.293 9H10.5a.5.5 0 010-1h6.793l-2.146-2.146a.5.5 0 01.707-.708l3 3a.505.505 0 010 .708l-2.999 2.999A.5.5 0 0115.5 12z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
  );

export default SvgDataTransferCircle;
