import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-remove_svg__a"
      cx={17.5}
      cy={17.501}
      r={6}
    />,
    <path
      className="messages-bubble-remove_svg__a"
      d="M19.621 15.379l-4.242 4.243M19.621 19.622l-4.242-4.243M21.331 10.477A6.957 6.957 0 0021.5 9C21.5 4.307 16.8.5 11 .5S.5 4.307.5 9a7.74 7.74 0 003.018 5.96L1.5 19.5l5.637-2.6a12.548 12.548 0 002.368.5"
    />
  );

export default SvgMessagesBubbleRemove;
