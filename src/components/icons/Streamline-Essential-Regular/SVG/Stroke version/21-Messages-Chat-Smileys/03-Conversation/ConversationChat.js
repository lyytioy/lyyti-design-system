import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat_svg__a"
      d="M21.75 8.25h-12l-4.5 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-4.5a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v4.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="conversation-chat_svg__a"
      d="M2.25 11.25a1.5 1.5 0 00-1.5 1.5v4.5a1.5 1.5 0 001.5 1.5h12l4.5 4.5v-4.5h3a1.5 1.5 0 001.5-1.5v-4.5a1.5 1.5 0 00-1.5-1.5h-10.5"
    />
  );

export default SvgConversationChat;
