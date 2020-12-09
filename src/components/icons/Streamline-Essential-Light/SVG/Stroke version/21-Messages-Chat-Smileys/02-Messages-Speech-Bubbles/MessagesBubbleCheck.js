import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-check_svg__a"
      cx={17.458}
      cy={17.501}
      r={6}
    />,
    <path
      className="messages-bubble-check_svg__a"
      d="M20.132 15.756l-2.905 3.874a.75.75 0 01-1.13.08l-1.5-1.5M21.29 10.477A6.956 6.956 0 0021.458 9c0-4.694-4.7-8.5-10.5-8.5S.458 4.307.458 9a7.744 7.744 0 003.018 5.96L1.458 19.5 7.1 16.9a12.582 12.582 0 002.368.5"
    />
  );

export default SvgMessagesBubbleCheck;
