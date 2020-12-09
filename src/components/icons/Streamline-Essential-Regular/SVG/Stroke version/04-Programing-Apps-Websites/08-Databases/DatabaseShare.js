import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <ellipse
      className="database-share_svg__a"
      cx={12}
      cy={3.001}
      rx={5.25}
      ry={2.25}
    />,
    <path
      className="database-share_svg__a"
      d="M6.75 3v3c0 1.242 2.351 2.25 5.25 2.25S17.25 7.243 17.25 6V3"
    />,
    <path
      className="database-share_svg__a"
      d="M6.75 6v3c0 1.242 2.351 2.25 5.25 2.25s5.25-1.007 5.25-2.25V6"
    />,
    <rect
      className="database-share_svg__a"
      x={0.75}
      y={14.251}
      width={9}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path className="database-share_svg__a" d="M5.25 20.251v3M3 23.251h4.5" />,
    <rect
      className="database-share_svg__a"
      x={14.25}
      y={14.251}
      width={9}
      height={6}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="database-share_svg__a"
      d="M18.75 20.251v3M16.5 23.251H21M2.251 11.251v-1.5a1.5 1.5 0 011.5-1.5M21.751 11.251v-1.5a1.5 1.5 0 00-1.5-1.5"
    />
  );

export default SvgDatabaseShare;
