import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="app_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="app_svg__a"
      d="M5.5 15v-4.5a1.5 1.5 0 113 0V15M5.5 12.004h3M13.5 10.5A1.5 1.5 0 0112 12h-1.5V9H12a1.5 1.5 0 011.5 1.5zM10.5 15.004v-3M18.5 10.5A1.5 1.5 0 0117 12h-1.5V9H17a1.5 1.5 0 011.5 1.5zM15.5 15.004v-3"
    />
  );

export default SvgApp;
