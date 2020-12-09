import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderCenter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-center_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cell-border-center_svg__a"
      d="M.5 17.497v-2.5M.5 7.997v-2.5M22.5 17.497v-2.5M22.5 7.997v-2.5M11.5 17.497v-2.5M11.5 7.997v-2.5M.5 11.497h22M5.5.497H8M15 .497h2.5M.5 3V1.5a1 1 0 011-1H3M20 .5h1.5a1 1 0 011 1V3M11.5.497v2.5M10.5.497h2M17.5 22.497H15M8 22.497H5.5M22.5 20v1.5a1 1 0 01-1 1H20M3 22.5H1.5a1 1 0 01-1-1V20M12.5 22.497h-2M11.5 22.497v-2.5"
    />
  );

export default SvgCellBorderCenter;
