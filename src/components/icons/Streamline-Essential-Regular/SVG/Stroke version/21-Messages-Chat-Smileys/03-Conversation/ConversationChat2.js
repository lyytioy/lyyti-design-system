import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationChat2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-chat-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-chat-2_svg__a"
      d="M23.25 13.5A5.249 5.249 0 0018 8.25h-3a5.25 5.25 0 000 10.5h.75l4.5 4.5v-5.024a5.237 5.237 0 003-4.726zM6.75 12.75l-3 3v-5.024A5.239 5.239 0 016 .75h3a5.252 5.252 0 015.033 3.75"
    />
  );

export default SvgConversationChat2;
