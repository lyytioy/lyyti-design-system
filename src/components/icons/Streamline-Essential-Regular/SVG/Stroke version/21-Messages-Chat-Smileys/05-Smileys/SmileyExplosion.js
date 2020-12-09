import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyExplosion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-explosion_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-explosion_svg__a"
      d="M7.5 6.75v2.184a3.059 3.059 0 01-1.155 2.4M16.5 6.75v2.184a3.059 3.059 0 001.155 2.4M13.5 8.25v1.043M10.5 8.25v1.043"
    />,
    <rect
      className="smiley-explosion_svg__a"
      x={10.5}
      y={15.75}
      width={3}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smiley-explosion_svg__a"
      d="M8.25 14.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.75 14.25a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <path
      className="smiley-explosion_svg__a"
      d="M12 12a22.062 22.062 0 01-7.145-1.113 8.251 8.251 0 1014.289 0A22.052 22.052 0 0112 12zM20.4 4.5A2.663 2.663 0 0017.6 2a2.989 2.989 0 00-1.687.517 5.216 5.216 0 00-7.826 0A2.989 2.989 0 006.4 2a2.663 2.663 0 00-2.8 2.5M3.6 4.5a2 2 0 00-2.1 1.875A2 2 0 003.6 8.25M20.4 4.5a2 2 0 012.1 1.875 2 2 0 01-2.1 1.875"
    />
  );

export default SvgSmileyExplosion;
