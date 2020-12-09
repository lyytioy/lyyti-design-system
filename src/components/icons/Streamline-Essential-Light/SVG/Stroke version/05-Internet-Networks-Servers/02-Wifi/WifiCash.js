import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiCash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-cash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-cash_svg__a"
      d="M3.032 7.6a8.945 8.945 0 0112.653 0M18.216 4.169a12.527 12.527 0 00-17.716 0M15.685 7.6a8.945 8.945 0 00-12.653 0M12.355 10.36a5.372 5.372 0 00-6.794.66M9.358 17.5a1.79 1.79 0 010-3.579M19 14.5h-2.033a1.342 1.342 0 00-.5 2.587l2.064.826a1.342 1.342 0 01-.5 2.587H16M17.5 21.5v-1M17.5 14.5v-1"
    />,
    <circle className="wifi-cash_svg__a" cx={17.5} cy={17.5} r={6} />
  );

export default SvgWifiCash;
