import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cell-border-left_svg__a"
      d="M.5.497v22M5.5.497H8M10.5.497h2M15 .497h2.5M5.5 22.497H8M10.5 22.497h2M15 22.497h2.5M5.5 11.497H8M10.5 11.497h2M15 11.497h2.5M11.5.497v2.5M11.5 5.497v2.5M11.5 14.997v2.5M11.5 19.997v2.5M11.5 10.497v2M22.5 5.497v2.5M22.5 14.997v2.5M20 .5h1.5a1 1 0 011 1V3M22.5 20v1.5a1 1 0 01-1 1H20M22.5 11.497H20M22.5 10.497v2"
    />
  );

export default SvgCellBorderLeft;
