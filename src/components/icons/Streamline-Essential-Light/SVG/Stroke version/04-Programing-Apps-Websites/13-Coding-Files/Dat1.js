import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDat1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dat-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="dat-1_svg__a"
      x={0.531}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="dat-1_svg__a"
      d="M4.531 11.5a4 4 0 010 8zM10.531 19.5v-6a2 2 0 014 0v6M10.531 15.504h4M16.531 11.504h4M18.531 11.504v8"
    />
  );

export default SvgDat1;
