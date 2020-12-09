import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgControlsPrevious = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".controls-previous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="controls-previous_svg__a"
      d="M23.25 3.629v16.742a.75.75 0 01-1.175.618L9.9 12.618a.749.749 0 010-1.236l12.175-8.371a.75.75 0 011.175.618z"
    />,
    <rect
      className="controls-previous_svg__a"
      x={0.75}
      y={2.25}
      width={4.5}
      height={19.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgControlsPrevious;
