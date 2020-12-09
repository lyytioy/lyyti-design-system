import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTablet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tablet_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="tablet_svg__a" d="M3.744 18.75h16.5" />,
    <rect
      className="tablet_svg__a"
      x={3.747}
      y={0.75}
      width={16.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="tablet_svg__a"
      d="M7.497 5.25h3v3h-3zM13.497 5.25h3v3h-3zM7.497 11.25h3v3h-3z"
    />
  );

export default SvgTablet;
