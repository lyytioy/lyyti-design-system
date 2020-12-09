import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySleepy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sleepy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-sleepy_svg__a"
      d="M22.176 7.2a11.239 11.239 0 11-5.743-5.54M6 11.2a1.8 1.8 0 003 0M15 11.2a1.8 1.8 0 003 0"
    />,
    <rect
      className="smiley-sleepy_svg__a"
      x={10.5}
      y={15.75}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-sleepy_svg__a"
      d="M20.25.75h3l-3 3h3M14.25 5.25h3l-3 3h3"
    />
  );

export default SvgSmileySleepy;
