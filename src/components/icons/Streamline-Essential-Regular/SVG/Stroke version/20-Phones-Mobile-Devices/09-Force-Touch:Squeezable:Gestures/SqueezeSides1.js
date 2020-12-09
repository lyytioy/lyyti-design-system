import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSqueezeSides1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".squeeze-sides-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="squeeze-sides-1_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="squeeze-sides-1_svg__a"
      d="M5.25 18.75h13.5M8.546 14.25a9.011 9.011 0 000-9M15.454 14.25a9.011 9.011 0 010-9"
    />
  );

export default SvgSqueezeSides1;
