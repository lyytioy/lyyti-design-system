import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHqx = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hqx_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="hqx_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="hqx_svg__a"
      d="M8.5 9.004v6M5.5 15.004v-6M5.5 12.004h3M13.5 13a1.5 1.5 0 01-3 0v-2.5a1.5 1.5 0 113 0zM13.5 16.004l-2-1.586M15.5 15.004l3-6M18.5 15.004l-3-6"
    />
  );

export default SvgHqx;
