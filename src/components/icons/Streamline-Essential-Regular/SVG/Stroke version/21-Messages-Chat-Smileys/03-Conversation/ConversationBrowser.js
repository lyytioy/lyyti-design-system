import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-browser_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />,
    <circle
      className="conversation-browser_svg__a"
      cx={16.646}
      cy={6.75}
      r={2.25}
    />,
    <path
      className="conversation-browser_svg__a"
      d="M20.543 12a4.5 4.5 0 00-7.793 0"
    />,
    <circle
      className="conversation-browser_svg__a"
      cx={8.25}
      cy={7.125}
      r={2.625}
    />,
    <path
      className="conversation-browser_svg__a"
      d="M3.75 15a4.5 4.5 0 019 0"
    />
  );

export default SvgConversationBrowser;
