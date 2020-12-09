import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiLaptop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-laptop_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-laptop_svg__a"
      d="M20.407 16.5V5.167A1.667 1.667 0 0018.74 3.5H5.073a1.667 1.667 0 00-1.667 1.667V16.5M15.407 16.5c0 1.1-1.567 2-3.5 2s-3.5-.9-3.5-2H1.093a.5.5 0 00-.464.686A5.28 5.28 0 005.53 20.5h12.754a5.28 5.28 0 004.9-3.314.5.5 0 00-.464-.686z"
    />,
    <path
      className="wifi-laptop_svg__a"
      d="M11.907 12.449a.25.25 0 10.25.25.25.25 0 00-.25-.25M15.907 7.915a6.36 6.36 0 00-8 0M9.574 10.325a3.713 3.713 0 014.667 0"
    />
  );

export default SvgWifiLaptop;
