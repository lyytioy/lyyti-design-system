import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-smile_svg__a"
      d="M12.111 1C5.76 1 .611 5.253.611 10.5a8.738 8.738 0 003.4 6.741L1.611 23l6.372-3.641a13.608 13.608 0 004.128.641c6.351 0 11.5-4.253 11.5-9.5S18.462 1 12.111 1zM6.611 8.5a2 2 0 014 0M17.611 8.5a2 2 0 00-4 0M14.611 12a2.5 2.5 0 01-5 0"
    />
  );

export default SvgMessagesBubbleSmile;
