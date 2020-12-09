import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="scroll-horizontal_svg__a"
      cx={12}
      cy={11.998}
      r={2.25}
    />,
    <path
      className="scroll-horizontal_svg__a"
      d="M6.311 18l-5.25-5.25a1.059 1.059 0 010-1.5L6.311 6M17.689 6l5.25 5.25a1.061 1.061 0 010 1.5L17.689 18"
    />
  );

export default SvgScrollHorizontal;
