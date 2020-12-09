import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiSignal3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-signal-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-signal-3_svg__a"
      d="M7 23.498h10l-5-10-5 10zM20.307 19.947a11.5 11.5 0 10-16.614 0M5.908 16.361a7.5 7.5 0 1112.184 0"
    />,
    <path
      className="wifi-signal-3_svg__a"
      d="M8.508 12.151c0-.052-.008-.1-.008-.153a3.5 3.5 0 117 0c0 .051-.006.1-.008.153M12 13.498v-2M7.02 23.498l7.123-5.714M17 23.498l-7.143-5.714"
    />
  );

export default SvgWifiSignal3;
