import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandGiveLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hand-give-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="hand-give-lock_svg__a"
      x={14.25}
      y={5.25}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="hand-give-lock_svg__a"
      d="M18.75.75a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 8.654a.375.375 0 11-.375.375.375.375 0 01.375-.375M.75 14.25v9M.75 21.75h16.5a3 3 0 00-3-3H10.5a3 3 0 00-3-3H.75M6.75 18.75h3.75"
    />
  );

export default SvgHandGiveLock;
