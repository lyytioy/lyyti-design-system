import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpandFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-full_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-full_svg__a"
      d="M.75 8.248v-6a1.5 1.5 0 011.5-1.5h6M23.25 8.248v-6a1.5 1.5 0 00-1.5-1.5h-6M.75 15.748v6a1.5 1.5 0 001.5 1.5h6M23.25 15.748v6a1.5 1.5 0 01-1.5 1.5h-6"
    />,
    <rect
      className="expand-full_svg__a"
      x={5.25}
      y={5.248}
      width={13.5}
      height={13.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgExpandFull;
