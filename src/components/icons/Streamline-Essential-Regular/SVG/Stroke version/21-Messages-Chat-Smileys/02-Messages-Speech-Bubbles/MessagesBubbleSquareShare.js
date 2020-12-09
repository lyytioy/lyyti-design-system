import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-share_svg__a"
      d="M8.223 19.9L3.75 23.25v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v6"
    />,
    <circle
      className="messages-bubble-square-share_svg__a"
      cx={13.5}
      cy={18}
      r={2.25}
    />,
    <circle
      className="messages-bubble-square-share_svg__a"
      cx={21}
      cy={21}
      r={2.25}
    />,
    <circle
      className="messages-bubble-square-share_svg__a"
      cx={21}
      cy={13.5}
      r={2.25}
    />,
    <path
      className="messages-bubble-square-share_svg__a"
      d="M15.425 16.845l3.649-2.19M15.588 18.835l3.324 1.33"
    />
  );

export default SvgMessagesBubbleSquareShare;
