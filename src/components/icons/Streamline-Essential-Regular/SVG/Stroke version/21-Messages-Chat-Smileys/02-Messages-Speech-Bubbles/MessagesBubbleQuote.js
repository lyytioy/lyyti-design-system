import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-quote_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.083A10.5 10.5 0 1012.75.75zM10.031 6v2.512M16.781 14.875a5.747 5.747 0 000-7.744"
    />,
    <path
      className="messages-bubble-quote_svg__a"
      d="M9.751 14.249a.75.75 0 000-1.5.75.75 0 000 1.5"
    />,
    <path
      className="messages-bubble-quote_svg__a"
      d="M9.916 17.505a2.787 2.787 0 001.616-2.378c0-1.045-.557-2.378-1.844-2.378"
    />
  );

export default SvgMessagesBubbleQuote;
