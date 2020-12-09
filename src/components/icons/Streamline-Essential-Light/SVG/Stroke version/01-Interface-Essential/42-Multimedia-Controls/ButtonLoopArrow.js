import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoopArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-loop-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-loop-arrow_svg__a"
      d="M10.5 10S9 6.5 6 6.5a5.5 5.5 0 000 11c5 0 7-11 12-11a5.5 5.5 0 11-4.5 8.5"
    />,
    <path
      className="button-loop-arrow_svg__a"
      d="M7.025 9.342l3.475.657.654-3.475"
    />
  );

export default SvgButtonLoopArrow;
