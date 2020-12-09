import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTextBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".text-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="text-bold_svg__a"
      d="M6.5.498v23M6.5 11.5H13a5.5 5.5 0 100-11H3.5"
    />,
    <path className="text-bold_svg__a" d="M13 11.5h1.5a6 6 0 010 12h-11" />
  );

export default SvgTextBold;
