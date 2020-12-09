import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDmg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dmg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="dmg_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="dmg_svg__a"
      d="M5.5 9a3 3 0 010 6zM10.5 15.004v-6l1.5 3 1.5-3v6M18.5 11v-.5a1.5 1.5 0 10-3 0v3a1.5 1.5 0 003 0V13h-1"
    />
  );

export default SvgDmg;
