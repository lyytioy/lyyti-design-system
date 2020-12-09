import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKissBlush = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-blush_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-kiss-blush_svg__a"
      d="M12.5 19.5h2a1 1 0 000-2 1 1 0 000-2h-2"
    />,
    <circle className="smiley-kiss-blush_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-kiss-blush_svg__a"
      d="M5.5 8a3.564 3.564 0 013-1.5M18.5 8a3.564 3.564 0 00-3-1.5M14.5 13.5l2-2M17.5 13.5l2-2M4.5 13.5l2-2M7.5 13.5l2-2"
    />
  );

export default SvgSmileyKissBlush;
