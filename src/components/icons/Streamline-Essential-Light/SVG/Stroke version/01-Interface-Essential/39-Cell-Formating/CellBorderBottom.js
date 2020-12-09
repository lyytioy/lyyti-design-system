import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cell-border-bottom_svg__a"
      d="M.5 22.497h22M.5 17.497v-2.5M.5 12.497v-2M.5 7.997v-2.5M22.5 17.497v-2.5M22.5 12.497v-2M22.5 7.997v-2.5M11.5 17.497v-2.5M11.5 12.497v-2M11.5 7.997v-2.5M.5 11.497H3M5.5 11.497H8M15 11.497h2.5M20 11.497h2.5M10.5 11.497h2M5.5.497H8M15 .497h2.5M.5 3V1.5a1 1 0 011-1H3M20 .5h1.5a1 1 0 011 1V3M11.5.497v2.5M10.5.497h2"
    />
  );

export default SvgCellBorderBottom;
