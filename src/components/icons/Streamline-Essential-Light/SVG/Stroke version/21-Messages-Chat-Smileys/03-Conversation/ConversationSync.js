import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-sync_svg__a"
      d="M19.5 2.259h-15a4 4 0 00-4 4v8a4 4 0 004 4h1l.078 3a.5.5 0 00.841.352L10 18.259h4l3.744 3.341a.5.5 0 00.833-.386l-.077-2.955h1a4 4 0 004-4v-8a4 4 0 00-4-4z"
    />,
    <path
      className="conversation-sync_svg__a"
      d="M10 11.259H7.5v2.5M15.111 11.748a3.714 3.714 0 01-7.159-.489M14 9.259h2.5v-2.5M8.889 8.77a3.714 3.714 0 017.159.489"
    />
  );

export default SvgConversationSync;
