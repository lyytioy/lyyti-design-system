import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.5 14.5a.5.5 0 01-.5-.5v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2a.5.5 0 01-1 0v-2c0-2.206 1.794-4 4-4s4 1.794 4 4v2a.5.5 0 01-.5.5z" />,
    <path d="M19.5 14.5a.5.5 0 01-.5-.5v-2c0-3.86-3.14-7-7-7s-7 3.14-7 7v2a.5.5 0 01-1 0v-2c0-4.411 3.589-8 8-8s8 3.589 8 8v2a.5.5 0 01-.5.5z" />,
    <path d="M12 23.998a.5.5 0 01-.5-.5v-11a.5.5 0 011 0v11a.5.5 0 01-.5.5z" />,
    <path d="M23.5 14.5a.5.5 0 01-.5-.5v-2c0-6.065-4.935-11-11-11S1 5.935 1 12v2a.5.5 0 01-1 0v-2C0 5.383 5.383 0 12 0s12 5.383 12 12v2a.5.5 0 01-.5.5z" />
  );

export default SvgWifiSignal;
