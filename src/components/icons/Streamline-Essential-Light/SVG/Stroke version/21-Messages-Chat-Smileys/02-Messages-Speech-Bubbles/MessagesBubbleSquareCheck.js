import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-square-check_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="messages-bubble-square-check_svg__a"
      d="M20.174 15.756l-2.905 3.873a.751.751 0 01-1.131.08l-1.5-1.5M9.5 14.5h-1l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v8"
    />
  );

export default SvgMessagesBubbleSquareCheck;
