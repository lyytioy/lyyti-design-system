import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleImage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-image_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-image_svg__a"
      d="M7.961 6.75a.375.375 0 000-.75.375.375 0 000 .75M19.5 14.25l-3.87-5.836a.749.749 0 00-1.238-.014l-2 2.851-1.236-.989a.75.75 0 00-1.092.17L7.521 14.25M6 14.25h13.5"
    />,
    <path
      className="messages-bubble-image_svg__a"
      d="M12.75.75a10.485 10.485 0 00-8.917 16.025L.75 23.25l6.474-3.083A10.5 10.5 0 1012.75.75z"
    />
  );

export default SvgMessagesBubbleImage;
