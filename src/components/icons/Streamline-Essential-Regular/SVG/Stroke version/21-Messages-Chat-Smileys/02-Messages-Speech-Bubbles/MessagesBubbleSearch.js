import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="messages-bubble-search_svg__a"
      cx={15.75}
      cy={15.75}
      r={5.25}
    />,
    <path
      className="messages-bubble-search_svg__a"
      d="M23.25 23.25l-3.788-3.788M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.75 23.25l6.474-3.084A10.652 10.652 0 009 21.05"
    />
  );

export default SvgMessagesBubbleSearch;
