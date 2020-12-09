import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-warning_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.084A10.5 10.5 0 1012.75.75zM12.75 14.25"
    />,
    <path
      className="messages-bubble-warning_svg__a"
      d="M12.75 14.25a.375.375 0 10.375.375.375.375 0 00-.375-.375M12.75 11.25v-4.5"
    />
  );

export default SvgMessagesBubbleWarning;
