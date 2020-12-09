import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-information_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-information_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.084A10.5 10.5 0 1012.75.75z"
    />,
    <path
      className="messages-bubble-information_svg__a"
      d="M15 15.75h-.75a1.5 1.5 0 01-1.5-1.5V10.5a.75.75 0 00-.75-.75h-.75M12.75 6.375A.375.375 0 0012.375 6M12.375 6a.375.375 0 10.375.375"
    />
  );

export default SvgMessagesBubbleInformation;
