import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSeen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-seen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-seen_svg__a"
      d="M20.5 3.5h1a2 2 0 012 2v8a2 2 0 01-1.423 1.916M20.5 3.5l-3-3v3"
    />,
    <circle className="conversation-seen_svg__a" cx={10.5} cy={12.5} r={3} />,
    <path
      className="conversation-seen_svg__a"
      d="M18.5 6.5h-16a2 2 0 00-2 2v8a2 2 0 002 2h2l5 5v-5h9a2 2 0 002-2v-8a2 2 0 00-2-2zM3.752 4.527A2 2 0 015.5 3.5h12"
    />,
    <path
      className="conversation-seen_svg__a"
      d="M10.5 15.5a7.494 7.494 0 01-5.414-2.3 1 1 0 010-1.392A7.5 7.5 0 0110.5 9.5M10.5 15.5a7.5 7.5 0 005.414-2.3 1 1 0 000-1.392A7.494 7.494 0 0010.5 9.5"
    />
  );

export default SvgConversationSeen;
