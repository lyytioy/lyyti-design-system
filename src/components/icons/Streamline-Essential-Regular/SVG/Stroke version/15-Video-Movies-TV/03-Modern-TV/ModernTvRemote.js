import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTvRemote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-remote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="modern-tv-remote_svg__a"
      d="M20.25 15.75a3 3 0 003-3v-9a3 3 0 00-3-3H3.75a3 3 0 00-3 3v9a3 3 0 003 3h4.5"
    />,
    <rect
      className="modern-tv-remote_svg__a"
      x={11.25}
      y={12.75}
      width={6}
      height={10.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="modern-tv-remote_svg__a"
      d="M14.25 15.75c.157 0-.375-.058-.375.375a.375.375 0 10.375-.375M14.25 19.5c.157 0-.375-.058-.375.375a.375.375 0 10.375-.375M20.25 6.885a9.542 9.542 0 00-12 0M10.75 9.488a5.566 5.566 0 017 0"
    />
  );

export default SvgModernTvRemote;
