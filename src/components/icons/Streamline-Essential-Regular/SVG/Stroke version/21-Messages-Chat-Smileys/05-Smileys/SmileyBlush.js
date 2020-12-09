import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyBlush = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-blush_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-blush_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-blush_svg__a"
      d="M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M15.75 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M5.25 13.5l.75-.75M8.25 13.5l.75-.75M15 13.5l.75-.75M18 13.5l.75-.75M9 18.75l3-1.5 3 1.5"
    />
  );

export default SvgSmileyBlush;
