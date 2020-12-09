import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodSkullChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-skull-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-skull-chat_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="mood-skull-chat_svg__a"
      d="M9 14.25V12l-.158-.079A2.426 2.426 0 017.5 9.75a4.5 4.5 0 019 0 2.426 2.426 0 01-1.342 2.171L15 12v2.25M12 12.75v1.5M10.125 9"
    />,
    <path
      className="mood-skull-chat_svg__a"
      d="M10.125 9a.375.375 0 10.375.375.375.375 0 00-.375-.375M13.875 9a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgMoodSkullChat;
