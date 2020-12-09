import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgChargingBatteryFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 16c-.551 0-1-.448-1-1V9c0-.551.449-1 1-1h15c.552 0 1 .449 1 1v6a1 1 0 01-1 1H3zm15-1V9h-3l3 6zm-4 0V9h-3l3 6zm-4 0V9H7v6h3zm-7 0h3V9H3v6z" />,
    <path d="M1.5 18C.673 18 0 17.327 0 16.5v-9C0 6.673.673 6 1.5 6h18c.827 0 1.5.673 1.5 1.5V9h1.5c.827 0 1.5.673 1.5 1.5v3c0 .827-.673 1.5-1.5 1.5H21v1.5c0 .827-.673 1.5-1.5 1.5h-18zm0-11a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-2a.5.5 0 01.5-.5h2a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 00-.5-.5h-18z" />
  );

export default SvgChargingBatteryFull;
