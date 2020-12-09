import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoopArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-loop-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-loop-arrow_svg__a"
      d="M13.9 15.315a5.61 5.61 0 004.1 2.249 5.25 5.25 0 000-10.5c-3.75 0-6 5.25-6 5.25s-2.25 5.25-6 5.25a5.25 5.25 0 010-10.5 6.615 6.615 0 014.5 2.383"
    />,
    <path
      className="button-loop-arrow_svg__a"
      d="M9.884 5.748l.616 3.699-3.699.617"
    />
  );

export default SvgButtonLoopArrow;
