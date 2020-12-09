import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyMad1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-mad-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smiley-mad-1_svg__a"
      x={10.5}
      y={15}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-mad-1_svg__a"
      d="M8.25 10.875a.375.375 0 11.375-.375.375.375 0 01-.375.375M15.75 10.875a.375.375 0 11.375-.375.375.375 0 01-.375.375M6.75 7.553a1.8 1.8 0 013 0M14.25 7.553a1.8 1.8 0 013 0"
    />,
    <circle className="smiley-mad-1_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgSmileyMad1;
