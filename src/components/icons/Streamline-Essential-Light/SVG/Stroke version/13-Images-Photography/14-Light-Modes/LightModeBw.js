import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeBw = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-bw_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="light-mode-bw_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="light-mode-bw_svg__a"
      d="M18.5 8.5v2.585C18.5 13.5 18 15.5 17 16.5L15.5 11 14 16.5c-1-1-1.5-3-1.5-5.415V8.5M9 10.5a2 2 0 01-2 2H5.5v-4H7a2 2 0 012 2zM9 14.5a2 2 0 01-2 2H5.5v-4H7a2 2 0 012 2z"
    />
  );

export default SvgLightModeBw;
