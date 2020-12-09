import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgArrangeNumber = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".arrange-number_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="arrange-number_svg__a"
      d="M8.25 23.248V.748M3.75 18.748l4.5 4.5 4.5-4.5M18.75 9.748V1.5a.75.75 0 00-1.2-.6l-1.8 1.35M17.25 9.748h3"
    />,
    <circle className="arrange-number_svg__a" cx={18} cy={16.498} r={2.25} />,
    <path
      className="arrange-number_svg__a"
      d="M17.25 23.248a3 3 0 003-3V16.5"
    />
  );

export default SvgArrangeNumber;
