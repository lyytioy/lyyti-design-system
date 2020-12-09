import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-quote_svg__a"
      d="M23.522 16.991a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-14a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="messages-bubble-square-quote_svg__a"
      d="M10.521 10.491v2.5a1 1 0 01-1 1M10.522 4.991v2.5"
    />,
    <circle
      className="messages-bubble-square-quote_svg__a"
      cx={9.021}
      cy={10.491}
      r={1.5}
    />,
    <path
      className="messages-bubble-square-quote_svg__a"
      d="M14.021 5.991c1.381 0 2.5 1.567 2.5 3.5s-1.119 3.5-2.5 3.5"
    />
  );

export default SvgMessagesBubbleSquareQuote;
