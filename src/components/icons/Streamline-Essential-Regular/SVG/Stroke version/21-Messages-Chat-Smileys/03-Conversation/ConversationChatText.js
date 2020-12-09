import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChatText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat-text_svg__a"
      d="M8.25 18l-3 2.25v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v4.5M5.25 5.25h10.5M5.25 9.75h3"
    />,
    <path
      className="conversation-chat-text_svg__a"
      d="M23.25 18.75h-3v4.5l-4.5-4.5h-4.5v-9h12v9zM20.25 12.75h-6M20.25 15.75h-6"
    />
  );

export default SvgConversationChatText;
