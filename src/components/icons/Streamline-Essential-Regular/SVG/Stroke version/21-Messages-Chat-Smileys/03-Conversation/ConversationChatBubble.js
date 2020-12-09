import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChatBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="conversation-chat-bubble_svg__a"
      cx={5.25}
      cy={14.25}
      r={3}
    />,
    <path
      className="conversation-chat-bubble_svg__a"
      d="M.75 23.25a4.5 4.5 0 019 0M21.349 12.75a3 3 0 11-5.6 1.5M14.25 23.25a4.5 4.5 0 019 0M8.25 9.75h3v4.5l4.5-4.5h4.5v-9h-12v9zM11.25 3.75h6M11.25 6.75h6"
    />
  );

export default SvgConversationChatBubble;
