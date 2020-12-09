import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24a1 1 0 01-1-1V12a1 1 0 112 0v11a1 1 0 01-1 1z" />,
    <path d="M16 15.248a1 1 0 01-1-1v-2a3 3 0 10-6 0v2a1 1 0 01-2 0v-2a5 5 0 0110 0v2a1 1 0 01-1 1z" />,
    <path d="M19.5 15a1 1 0 01-1-1v-2a6.5 6.5 0 00-13 0v2a1 1 0 01-2 0v-2a8.5 8.5 0 0117 0v2a1 1 0 01-1 1z" />,
    <path d="M23 15a1 1 0 01-1-1v-2a10 10 0 00-20 0v2a1 1 0 01-2 0v-2a12 12 0 0124 0v2a1 1 0 01-1 1z" />
  );

export default SvgWifiSignal;
