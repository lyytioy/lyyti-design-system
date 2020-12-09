import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="messages-bubble-lock_svg__a"
      x={14.5}
      y={15.502}
      width={9}
      height={7.999}
      rx={1}
      ry={1}
    />,
    <circle
      className="messages-bubble-lock_svg__a"
      cx={19}
      cy={19.564}
      r={1.25}
    />,
    <path
      className="messages-bubble-lock_svg__a"
      d="M21.5 14a2.5 2.5 0 10-5 0v1.5h5z"
    />,
    <path
      className="messages-bubble-lock_svg__a"
      d="M21.384 10.2A6.986 6.986 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.74 7.74 0 003.018 5.959L1.5 19.5l5.637-2.6a12.637 12.637 0 003.863.6 12.957 12.957 0 001.5-.1"
    />
  );

export default SvgMessagesBubbleLock;
