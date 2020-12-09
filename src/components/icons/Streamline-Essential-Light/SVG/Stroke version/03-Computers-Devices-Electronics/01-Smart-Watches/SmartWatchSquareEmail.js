import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchSquareEmail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-square-email_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="smart-watch-square-email_svg__a"
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={2}
      ry={2}
    />,
    <path
      className="smart-watch-square-email_svg__a"
      d="M16.5 3.5h-9l1-3h7l1 3zM7.5 20.5h9l-1 3h-7l-1-3z"
    />,
    <rect
      className="smart-watch-square-email_svg__a"
      x={6.5}
      y={8.5}
      width={11}
      height={7}
      rx={1}
      ry={1}
    />,
    <path
      className="smart-watch-square-email_svg__a"
      d="M6.5 10l4.5 2.3a2 2 0 002 0l4.5-2.3"
    />
  );

export default SvgSmartWatchSquareEmail;
