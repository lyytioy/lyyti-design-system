import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSpeak = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-speak_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="conversation-speak_svg__a"
      cx={19.5}
      cy={3.562}
      r={2.625}
    />,
    <path
      className="conversation-speak_svg__a"
      d="M17.25 20.813a2.25 2.25 0 104.5 0v-3.75a1.5 1.5 0 001.5-1.5v-4.5a3 3 0 00-3-3h-1.5a3 3 0 00-3 3v4.5a1.5 1.5 0 001.5 1.5z"
    />,
    <circle
      className="conversation-speak_svg__a"
      cx={6}
      cy={3.562}
      r={2.625}
    />,
    <path
      className="conversation-speak_svg__a"
      d="M3.75 20.813a2.25 2.25 0 004.5 0v-3.75h3l-1.5-4.5v-1.5a3 3 0 00-3-3h-1.5a3 3 0 00-3 3v1.5l-1.5 4.5h3zM10.371 1.441a3 3 0 010 4.243M15.129 1.441a3 3 0 000 4.243"
    />
  );

export default SvgConversationSpeak;
