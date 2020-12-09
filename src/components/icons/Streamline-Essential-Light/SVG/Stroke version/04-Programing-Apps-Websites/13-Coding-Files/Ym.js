import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgYm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ym_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ym_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="ym_svg__a"
      d="M13 15.004v-6l1.5 3 1.5-3v6M9 12.004v3M7 9v1a2 2 0 004 0V9"
    />
  );

export default SvgYm;
