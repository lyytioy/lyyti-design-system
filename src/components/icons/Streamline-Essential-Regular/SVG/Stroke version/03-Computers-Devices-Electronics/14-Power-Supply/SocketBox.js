import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSocketBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".socket-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="socket-box_svg__a" d="M10.5 5.32v1.43M13.5 5.32v1.43" />,
    <circle className="socket-box_svg__a" cx={12} cy={6} r={4.5} />,
    <path className="socket-box_svg__a" d="M10.5 17.32v1.43M13.5 17.32v1.43" />,
    <circle className="socket-box_svg__a" cx={12} cy={18} r={4.5} />,
    <path
      className="socket-box_svg__a"
      d="M17.25 23.25H18a1.5 1.5 0 001.5-1.5V2.25A1.5 1.5 0 0018 .75h-.75M6.75.75H6a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h.75"
    />
  );

export default SvgSocketBox;
