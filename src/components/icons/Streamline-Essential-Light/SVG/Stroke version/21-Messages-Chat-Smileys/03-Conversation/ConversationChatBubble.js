import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChatBubble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-bubble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat-bubble_svg__a"
      d="M6.5 6.5h3V9L12 6.5h5.5v-6h-11v6zM8.5 4.518h5M8.5 2.518h7"
    />,
    <circle
      className="conversation-chat-bubble_svg__a"
      cx={3.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="conversation-chat-bubble_svg__a"
      d="M3.5 13.5a3 3 0 00-3 3v2H2l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3z"
    />,
    <circle
      className="conversation-chat-bubble_svg__a"
      cx={20.5}
      cy={10.25}
      r={2.25}
    />,
    <path
      className="conversation-chat-bubble_svg__a"
      d="M20.5 13.5a3 3 0 00-3 3v2H19l.5 5h2l.5-5h1.5v-2a3 3 0 00-3-3z"
    />
  );

export default SvgConversationChatBubble;
