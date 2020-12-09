import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-subtract_svg__a"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="messages-bubble-subtract_svg__a"
      d="M20.5 17.5h-6M21.331 10.477A6.966 6.966 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.744 7.744 0 003.018 5.96L1.5 19.5l5.637-2.6a12.707 12.707 0 002.368.5"
    />
  );

export default SvgMessagesBubbleSubtract;
