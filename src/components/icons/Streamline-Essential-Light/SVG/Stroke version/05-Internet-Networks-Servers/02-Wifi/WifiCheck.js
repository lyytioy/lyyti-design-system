import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-check_svg__a"
      d="M3.032 7.6a8.945 8.945 0 0112.653 0M18.216 4.17A12.528 12.528 0 00.5 4.17M15.685 7.6a8.945 8.945 0 00-12.653 0M12.355 10.361a5.372 5.372 0 00-6.794.66M9.358 17.5a1.79 1.79 0 010-3.579"
    />,
    <circle className="wifi-check_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="wifi-check_svg__a"
      d="M20.174 15.756l-2.905 3.873a.752.752 0 01-1.131.081l-1.5-1.5"
    />
  );

export default SvgWifiCheck;
