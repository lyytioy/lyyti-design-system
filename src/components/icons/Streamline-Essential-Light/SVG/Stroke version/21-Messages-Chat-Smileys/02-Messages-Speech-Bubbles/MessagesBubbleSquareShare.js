import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-square-share_svg__a"
      cx={13.75}
      cy={18.25}
      r={2.25}
    />,
    <circle
      className="messages-bubble-square-share_svg__a"
      cx={21.25}
      cy={21.25}
      r={2.25}
    />,
    <circle
      className="messages-bubble-square-share_svg__a"
      cx={21.25}
      cy={13.75}
      r={2.25}
    />,
    <path
      className="messages-bubble-square-share_svg__a"
      d="M15.675 17.095l3.65-2.19M15.838 19.085l3.324 1.33M9.5 14.5h-1l-4 4v-4h-3a1 1 0 01-1-1v-12a1 1 0 011-1h19a1 1 0 011 1v8"
    />
  );

export default SvgMessagesBubbleSquareShare;
