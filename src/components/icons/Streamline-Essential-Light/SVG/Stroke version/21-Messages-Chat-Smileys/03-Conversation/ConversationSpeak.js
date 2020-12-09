import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSpeak = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-speak_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="conversation-speak_svg__a" cx={5.393} cy={2.5} r={2} />,
    <circle className="conversation-speak_svg__a" cx={19.393} cy={2.5} r={2} />,
    <path
      className="conversation-speak_svg__a"
      d="M19.893 23.5a1.5 1.5 0 001.5-1.5v-6.5h1a1 1 0 001-1v-5a3 3 0 00-3-3h-2a3 3 0 00-3 3v5a1 1 0 001 1h1V22a1.5 1.5 0 001.5 1.5zM9.069 2.214a1.414 1.414 0 010 1.572M15.717 2.214a1.414 1.414 0 000 1.572M10.565 1a2.829 2.829 0 010 4M14.222 1a2.828 2.828 0 000 4M5.893 23.5a1.5 1.5 0 001.5-1.5v-4h2.286a.5.5 0 00.47-.671L8.574 13a2.993 2.993 0 01-.181-1.026V8.5a2 2 0 00-2-2h-2a2 2 0 00-2 2v3.471A2.993 2.993 0 012.212 13L.637 17.329a.5.5 0 00.47.671h2.286v4a1.5 1.5 0 001.5 1.5z"
    />
  );

export default SvgConversationSpeak;
