import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMouseSmart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mouse-smart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mouse-smart_svg__a"
      x={4.5}
      y={0.5}
      width={15}
      height={23}
      rx={6}
      ry={6}
    />,
    <path
      className="mouse-smart_svg__a"
      d="M13 7.5a1 1 0 01-1 1 1 1 0 01-1-1v-2a1 1 0 011-1 1 1 0 011 1z"
    />
  );

export default SvgMouseSmart;
