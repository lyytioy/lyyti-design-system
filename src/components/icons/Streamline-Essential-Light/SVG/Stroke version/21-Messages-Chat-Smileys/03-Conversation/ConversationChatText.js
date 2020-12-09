import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChatText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat-text_svg__a"
      d="M9.425 19.575L7.5 21.5v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h18a1 1 0 011 1v7"
    />,
    <path
      className="conversation-chat-text_svg__a"
      d="M11.5 19.5h5l4 4v-4h2a1 1 0 001-1v-7a1 1 0 00-1-1h-10a1 1 0 00-1 1zM5 4.5h11M5 8.5h11M14.5 13.5h6M14.5 16.5h6M5 12.5h4.5"
    />
  );

export default SvgConversationChatText;
