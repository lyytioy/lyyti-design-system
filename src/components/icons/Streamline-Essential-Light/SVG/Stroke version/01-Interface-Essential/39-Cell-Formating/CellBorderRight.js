import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cell-border-right_svg__a"
      d="M22.5 22.497v-22M17.5 22.497H15M12.5 22.497h-2M8 22.497H5.5M17.5.497H15M12.5.497h-2M8 .497H5.5M17.5 11.497H15M12.5 11.497h-2M8 11.497H5.5M11.5 22.497v-2.5M11.5 17.497v-2.5M11.5 7.997v-2.5M11.5 2.997v-2.5M11.5 12.497v-2M.5 17.497v-2.5M.5 7.997v-2.5M3 22.5H1.5a1 1 0 01-1-1V20M.5 3V1.5a1 1 0 011-1H3M.5 11.497H3M.5 12.497v-2"
    />
  );

export default SvgCellBorderRight;
