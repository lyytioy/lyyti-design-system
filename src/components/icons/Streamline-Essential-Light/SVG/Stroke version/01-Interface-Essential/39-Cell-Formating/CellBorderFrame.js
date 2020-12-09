import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCellBorderFrame = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cell-border-frame_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="cell-border-frame_svg__a"
      x={0.5}
      y={0.497}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="cell-border-frame_svg__a"
      d="M12.5 11.497h-2M8 11.497H6.5M11.5 12.497v-2M2.5 11.497H4M15 11.497h1.5M20.5 11.497H19M11.5 7.997v-1.5M11.5 2.497v1.5M11.5 14.997v1.5M11.5 20.497v-1.5"
    />
  );

export default SvgCellBorderFrame;
