import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneMonitorExchange = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-monitor-exchange_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-monitor-exchange_svg__a"
      d="M6.5 23l2-2-2-2M1 8.979A1.517 1.517 0 002.5 10.5h9A1.518 1.518 0 0013 8.979V3a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 001 3zM1 7.5h12M4.5 12.5h5M7 10.5v2M14 11.5a1 1 0 011-1h6a1 1 0 011 1v11a1 1 0 01-1 1h-6a1 1 0 01-1-1z"
    />,
    <path
      className="phone-monitor-exchange_svg__a"
      d="M2.5 16a5 5 0 005 5h1M18.5 1l-2 2 2 2"
    />,
    <path
      className="phone-monitor-exchange_svg__a"
      d="M22.5 8a5 5 0 00-5-5h-1M14 19.5h8M18 21.25a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgPhoneMonitorExchange;
