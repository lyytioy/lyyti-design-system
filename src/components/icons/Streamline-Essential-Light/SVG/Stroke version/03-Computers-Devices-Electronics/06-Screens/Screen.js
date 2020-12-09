import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScreen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="screen_svg__a"
      d="M19.5 21.5A17.116 17.116 0 0012 20a17.116 17.116 0 00-7.5 1.5"
    />,
    <rect
      className="screen_svg__a"
      x={0.5}
      y={2.5}
      width={23}
      height={15}
      rx={1}
      ry={1}
    />,
    <path className="screen_svg__a" d="M10.5 17.5v2.55M13.5 17.5v2.55" />
  );

export default SvgScreen;
