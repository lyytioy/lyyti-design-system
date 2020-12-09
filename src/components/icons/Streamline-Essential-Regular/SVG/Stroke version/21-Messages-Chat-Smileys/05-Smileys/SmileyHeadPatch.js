import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHeadPatch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-head-patch_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-head-patch_svg__a"
      d="M12 .75A11.25 11.25 0 11.75 12M7.768 10.5a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="smiley-head-patch_svg__a"
      d="M16.5 10.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M18.048 18a6.752 6.752 0 00-12.1 0M18.834 8.166a3.689 3.689 0 01-4.018-1.934"
    />,
    <rect
      className="smiley-head-patch_svg__a"
      x={0.242}
      y={3.202}
      width={10.654}
      height={4.735}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 5.57 5.57)"
    />,
    <path className="smiley-head-patch_svg__a" d="M4.5 6.75L6.75 4.5" />
  );

export default SvgSmileyHeadPatch;
