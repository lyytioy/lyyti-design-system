import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScreen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="screen_svg__a"
      x={0.747}
      y={2.25}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path className="screen_svg__a" d="M19.5 20.856a9.6 9.6 0 00-15 0" />
  );

export default SvgScreen;
