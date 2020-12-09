import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArrangeNumber = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arrange-number_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="arrange-number_svg__a"
      d="M5.5 4.498v15M2.5 16.498l3 3 3-3M16 8.498h5M18.5 8.5V1a.5.5 0 00-.812-.39L16 1.958"
    />,
    <circle className="arrange-number_svg__a" cx={18} cy={17.998} r={2.5} />,
    <path className="arrange-number_svg__a" d="M20.5 18v2.5a3 3 0 01-3 3H17" />
  );

export default SvgArrangeNumber;
