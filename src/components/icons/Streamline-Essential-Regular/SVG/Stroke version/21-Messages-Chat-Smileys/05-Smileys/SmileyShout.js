import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smiley-shout_svg__a"
      x={10.5}
      y={15.75}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-shout_svg__a"
      d="M7.5 9.375A.375.375 0 117.875 9a.375.375 0 01-.375.375M16.5 9.375A.375.375 0 1116.875 9a.375.375 0 01-.375.375M6 6.053a1.8 1.8 0 013 0M15 6.053a1.8 1.8 0 013 0"
    />,
    <circle className="smiley-shout_svg__a" cx={12} cy={12} r={11.25} />,
    <path className="smiley-shout_svg__a" d="M9.75 12.75h.75M13.5 12.75h.75" />
  );

export default SvgSmileyShout;
