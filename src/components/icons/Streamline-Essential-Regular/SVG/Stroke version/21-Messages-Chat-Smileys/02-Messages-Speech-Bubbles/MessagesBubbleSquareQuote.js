import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-quote_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="messages-bubble-square-quote_svg__a"
      d="M7.968 12.75a.75.75 0 000-1.5.75.75 0 000 1.5"
    />,
    <path
      className="messages-bubble-square-quote_svg__a"
      d="M8.134 16.006a2.787 2.787 0 001.616-2.378c0-1.045-.558-2.378-1.844-2.378M8.25 4.5v2.512M15 13.375a5.747 5.747 0 000-7.744"
    />
  );

export default SvgMessagesBubbleSquareQuote;
