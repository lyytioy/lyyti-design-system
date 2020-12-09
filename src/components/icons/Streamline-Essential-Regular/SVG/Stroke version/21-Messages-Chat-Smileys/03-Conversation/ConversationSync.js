import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSync = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-sync_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-sync_svg__a"
      d="M20.25.75H3.75a3 3 0 00-3 3v12a3 3 0 003 3h1.5v3.75a.75.75 0 001.28.531l3.97-4.281h3l3.97 4.279a.75.75 0 001.28-.531V18.75h1.5a3 3 0 003-3v-12a3 3 0 00-3-3z"
    />,
    <path
      className="conversation-sync_svg__a"
      d="M10.313 10.875H7.5v2.813M16.063 11.425a4.179 4.179 0 01-8.055-.55M14 7.875h2.813V5.062M8.25 7.325a4.179 4.179 0 018.055.55"
    />
  );

export default SvgConversationSync;
