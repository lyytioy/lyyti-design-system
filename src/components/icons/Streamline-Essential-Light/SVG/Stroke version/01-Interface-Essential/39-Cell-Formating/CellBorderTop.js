import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cell-border-top_svg__a"
      d="M22.5.497H.5M22.5 5.497v2.5M22.5 10.497v2M22.5 14.997v2.5M.5 5.497v2.5M.5 10.497v2M.5 14.997v2.5M11.5 5.497v2.5M11.5 10.497v2M11.5 14.997v2.5M22.5 11.497H20M17.5 11.497H15M8 11.497H5.5M3 11.497H.5M12.5 11.497h-2M17.5 22.497H15M8 22.497H5.5M22.5 20v1.5a1 1 0 01-1 1H20M3 22.5H1.5a1 1 0 01-1-1V20M11.5 22.497v-2.5M12.5 22.497h-2"
    />
  );

export default SvgCellBorderTop;
