import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="messages-bubble-square-lock_svg__a"
      x={14.5}
      y={15.501}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="messages-bubble-square-lock_svg__a"
      cx={19}
      cy={19.563}
      r={1.25}
    />,
    <path
      className="messages-bubble-square-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 00-5 0v1.5h5zM13 14.5H8.5l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v8"
    />
  );

export default SvgMessagesBubbleSquareLock;
