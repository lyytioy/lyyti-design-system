import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-check_svg__a"
      d="M22.968 9.006a10.5 10.5 0 10-19.177 7.769L.708 23.25l6.475-3.084a10.576 10.576 0 001.772.884M23.208 17.248a6 6 0 11-6-6"
    />,
    <path
      className="messages-bubble-check_svg__a"
      d="M23.208 12.748l-5.47 5.47a.751.751 0 01-1.06 0l-1.72-1.72"
    />
  );

export default SvgMessagesBubbleCheck;
