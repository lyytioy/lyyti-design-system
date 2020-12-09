import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSeen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-seen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-seen_svg__a"
      d="M17.75 20.25h-8.5l-4 3v-3h-3.5a1 1 0 01-1-1v-10a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1z"
    />,
    <path
      className="conversation-seen_svg__a"
      d="M6.75 5.25v-.5a1 1 0 011-1H15v-3l3.75 3h3.5a1 1 0 011 1v10a1 1 0 01-1 1h-.5M9.75 17.25a6.686 6.686 0 004.99-2.3 1.062 1.062 0 000-1.392 6.684 6.684 0 00-4.99-2.3 6.684 6.684 0 00-4.99 2.3 1.062 1.062 0 000 1.392 6.684 6.684 0 004.99 2.3z"
    />,
    <path
      className="conversation-seen_svg__a"
      d="M9.75 13.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgConversationSeen;
