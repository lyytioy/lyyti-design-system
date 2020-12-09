import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScreen1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screen-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="screen-1_svg__a"
      x={0.747}
      y={2.25}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="screen-1_svg__a"
      d="M15.747 21.75h-7.5l.75-4.5h6l.75 4.5zM5.997 21.75h12"
    />
  );

export default SvgScreen1;
