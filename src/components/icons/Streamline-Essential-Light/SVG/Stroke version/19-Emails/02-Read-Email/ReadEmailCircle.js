import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".read-email-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="read-email-circle_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="read-email-circle_svg__a"
      d="M18.5 9v6.5a1 1 0 01-1 1h-11a1 1 0 01-1-1V9"
    />,
    <path
      className="read-email-circle_svg__a"
      d="M18.5 9v-.5a1 1 0 00-1-1h-11a1 1 0 00-1 1V9l5.705 3.253a1.5 1.5 0 001.59 0z"
    />
  );

export default SvgReadEmailCircle;
