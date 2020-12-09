import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="like-plus_svg__a"
      x={0.75}
      y={1.5}
      width={22.5}
      height={21}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="like-plus_svg__a"
      d="M.75 6h22.5M17.25 12h-3V9h-4.5v3h-3v4.5h3v3h4.5v-3h3V12z"
    />
  );

export default SvgLikePlus;
