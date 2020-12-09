import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat_svg__a"
      d="M23.5 7.5a1 1 0 01-1 1H10l-4.5 4v-4h-4a1 1 0 01-1-1v-6a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="conversation-chat_svg__a"
      d="M3 11.5H1.5a1 1 0 00-1 1v6a1 1 0 001 1H14l4.5 4v-4h4a1 1 0 001-1v-6a1 1 0 00-1-1h-12"
    />
  );

export default SvgConversationChat;
