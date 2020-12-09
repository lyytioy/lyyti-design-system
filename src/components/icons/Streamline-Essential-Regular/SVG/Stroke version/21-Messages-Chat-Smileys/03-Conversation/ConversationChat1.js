import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChat1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat-1_svg__a"
      d="M11.25 18.75a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5h-1.5v4.5l-4.5-4.5z"
    />,
    <path
      className="conversation-chat-1_svg__a"
      d="M6.75 12.75l-3 3v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-7.5a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5v3"
    />
  );

export default SvgConversationChat1;
