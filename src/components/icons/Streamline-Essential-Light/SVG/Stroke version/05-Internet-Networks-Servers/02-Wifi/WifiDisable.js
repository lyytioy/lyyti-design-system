import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-disable_svg__a"
      d="M3.032 7.6a8.944 8.944 0 0112.653 0M18.216 4.169a12.526 12.526 0 00-17.716 0M15.685 7.6a8.944 8.944 0 00-12.653 0M12.355 10.36a5.372 5.372 0 00-6.794.66M9.358 17.5a1.79 1.79 0 010-3.579"
    />,
    <circle className="wifi-disable_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path className="wifi-disable_svg__a" d="M13.258 21.742l8.485-8.485" />
  );

export default SvgWifiDisable;
