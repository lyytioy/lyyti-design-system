import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="dat_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="dat_svg__a"
      d="M5.5 9a3 3 0 010 6zM10.5 15v-4.5a1.5 1.5 0 113 0V15M10.5 12.004h3M15.5 9.004h4M17.5 9.004v6"
    />
  );

export default SvgDat;
