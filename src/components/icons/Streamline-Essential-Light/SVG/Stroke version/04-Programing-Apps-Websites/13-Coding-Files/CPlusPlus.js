import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCPlusPlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".c-plus-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="c-plus-plus_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="c-plus-plus_svg__a"
      d="M11.5 10.004v4M13.5 12.004h-4M17.5 10.004v4M19.5 12.004h-4M7.5 15a3 3 0 010-6"
    />
  );

export default SvgCPlusPlus;
