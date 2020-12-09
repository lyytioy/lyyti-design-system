import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-forward_svg__a"
      d="M18.75 11.999l4.5 3.5-4.5 3.5"
    />,
    <path
      className="messages-bubble-forward_svg__a"
      d="M23.25 15.5h-3.5a6 6 0 00-6 6v2M21.661 10.017A6.839 6.839 0 0021.75 9c0-4.695-4.7-8.5-10.5-8.5S.75 4.306.75 9a7.744 7.744 0 003.018 5.96L1.75 19.5l5.637-2.6a12.633 12.633 0 003.863.6 12.9 12.9 0 001.659-.117"
    />
  );

export default SvgMessagesBubbleForward;
