import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorHand2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cursor-hand-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cursor-hand-2_svg__a"
      d="M17.439 6a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v11.376a5.118 5.118 0 01-1.5 3.624 5.118 5.118 0 01-3.621 1.5H12.4a6 6 0 01-4.993-2.671l-3.65-5.475a1.541 1.541 0 010-1.707A1.539 1.539 0 016 12.3l2.439 1.951V4.5a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5V3a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5v1.5a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5zM11.439 4.497v6M14.439 4.497v6M17.439 10.497v-4.5"
    />
  );

export default SvgCursorHand2;
