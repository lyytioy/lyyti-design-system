import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-search_svg__a"
      d="M23.5 23.5l-3.578-3.577"
    />,
    <circle
      className="messages-bubble-search_svg__a"
      cx={17}
      cy={16.5}
      r={4.5}
    />,
    <path
      className="messages-bubble-search_svg__a"
      d="M21.331 10.478A6.974 6.974 0 0021.5 9C21.5 4.307 16.8.5 11 .5S.5 4.307.5 9a7.744 7.744 0 003.018 5.96L1.5 19.5l5.637-2.6a12.626 12.626 0 002.368.5"
    />
  );

export default SvgMessagesBubbleSearch;
