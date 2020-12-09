import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="scroll-horizontal_svg__a" cx={12} cy={11.998} r={2} />,
    <path
      className="scroll-horizontal_svg__a"
      d="M17.914 6.5l4.793 4.793a1 1 0 010 1.414L17.914 17.5M6.086 6.5l-4.793 4.791a1 1 0 000 1.414L6.086 17.5"
    />
  );

export default SvgScrollHorizontal;
