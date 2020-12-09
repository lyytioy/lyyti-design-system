import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleText1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-text-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-text-1_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.083A10.5 10.5 0 1012.75.75zM8.248 8.25h9M6.748 11.25h12M8.248 14.25h9"
    />
  );

export default SvgMessagesBubbleText1;
