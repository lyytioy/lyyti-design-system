import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChat1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat-1_svg__a"
      d="M8.5 13.5h-1l-4 4v-4h-2a1 1 0 01-1-1v-11a1 1 0 011-1h17a1 1 0 011 1v6"
    />,
    <path
      className="conversation-chat-1_svg__a"
      d="M10.5 18.5a1 1 0 001 1H17l4.5 4v-4h1a1 1 0 001-1v-8a1 1 0 00-1-1h-11a1 1 0 00-1 1z"
    />
  );

export default SvgConversationChat1;
