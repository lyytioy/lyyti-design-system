import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleForwardAll = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-forward-all_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-forward-all_svg__a"
      d="M19 11.999l4.5 3.5-4.5 3.5"
    />,
    <path
      className="messages-bubble-forward-all_svg__a"
      d="M15.5 11.999l4.5 3.5-4.5 3.5"
    />,
    <path
      className="messages-bubble-forward-all_svg__a"
      d="M20 15.5h-3.5a6 6 0 00-6 6v2M21.412 10.017A6.839 6.839 0 0021.5 9C21.5 4.306 16.8.5 11 .5S.5 4.306.5 9a7.744 7.744 0 003.018 5.96L1.5 19.5l5.637-2.6a12.615 12.615 0 002.325.509"
    />
  );

export default SvgMessagesBubbleForwardAll;
