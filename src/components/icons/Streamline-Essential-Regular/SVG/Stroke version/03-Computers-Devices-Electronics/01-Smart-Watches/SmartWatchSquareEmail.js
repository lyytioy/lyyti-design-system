import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareEmail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-email_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-email_svg__a"
      x={3.75}
      y={3.75}
      width={16.5}
      height={16.5}
      rx={3}
      ry={3}
    />,
    <path
      className="smart-watch-square-email_svg__a"
      d="M17.25 3.75H6.75v-1.5a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5zM15.75 23.25h-7.5a1.5 1.5 0 01-1.5-1.5v-1.5h10.5v1.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <rect
      className="smart-watch-square-email_svg__a"
      x={6.75}
      y={8.25}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="smart-watch-square-email_svg__a"
      d="M6.75 9.75l4.506 2.575a1.5 1.5 0 001.488 0L17.25 9.75"
    />
  );

export default SvgSmartWatchSquareEmail;
