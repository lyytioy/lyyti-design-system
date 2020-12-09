import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-smile_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.084A10.5 10.5 0 1012.75.75zM10.386 9.5a2.234 2.234 0 00-4.011 0M19.38 9.5a2.234 2.234 0 00-4.011 0M9.006 15a5.746 5.746 0 007.743 0"
    />
  );

export default SvgMessagesBubbleSmile;
