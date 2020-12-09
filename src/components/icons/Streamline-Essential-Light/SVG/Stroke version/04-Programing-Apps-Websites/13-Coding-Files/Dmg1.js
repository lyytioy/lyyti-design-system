import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDmg1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dmg-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="dmg-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="dmg-1_svg__a"
      d="M4 11.5a4 4 0 010 8zM10 19.504v-8l2 4 2-4v8M20 13.5a2 2 0 10-4 0v4a2 2 0 104 0v-1h-1.5"
    />
  );

export default SvgDmg1;
