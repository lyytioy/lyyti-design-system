import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleAdd1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-add-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-add-1_svg__a"
      d="M9.5 16l-2 2v-4H7A6.519 6.519 0 01.5 7.5c0-3.575 2.925-7 6.5-7h8c3.575 0 6.5 3.424 6.5 7A6.458 6.458 0 0121 10"
    />,
    <circle
      className="messages-bubble-add-1_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="messages-bubble-add-1_svg__a"
      d="M17.5 14.501v6M20.5 17.501h-6"
    />
  );

export default SvgMessagesBubbleAdd1;
