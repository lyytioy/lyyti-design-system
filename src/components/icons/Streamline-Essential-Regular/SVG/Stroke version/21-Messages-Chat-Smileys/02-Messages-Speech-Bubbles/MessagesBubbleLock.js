import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="messages-bubble-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="messages-bubble-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <path
      className="messages-bubble-lock_svg__a"
      d="M23.25 10.542a10.513 10.513 0 10-19.42 6.233L.75 23.25l6.471-3.084a10.475 10.475 0 003.983 1.47"
    />
  );

export default SvgMessagesBubbleLock;
