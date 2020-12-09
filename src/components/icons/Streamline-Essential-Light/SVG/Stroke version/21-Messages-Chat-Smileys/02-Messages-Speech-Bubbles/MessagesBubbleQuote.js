import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-quote_svg__a"
      d="M10.666 11.5V14a1 1 0 01-1 1M10.667 6v2.5"
    />,
    <circle
      className="messages-bubble-quote_svg__a"
      cx={9.166}
      cy={11.5}
      r={1.5}
    />,
    <path
      className="messages-bubble-quote_svg__a"
      d="M14.166 7c1.381 0 2.5 1.567 2.5 3.5s-1.119 3.5-2.5 3.5"
    />,
    <path
      className="messages-bubble-quote_svg__a"
      d="M12.167 1C5.815 1 .667 5.253.667 10.5a8.74 8.74 0 003.4 6.741L1.667 23l6.372-3.641a13.6 13.6 0 004.128.641c6.351 0 11.5-4.253 11.5-9.5S18.518 1 12.167 1z"
    />
  );

export default SvgMessagesBubbleQuote;
