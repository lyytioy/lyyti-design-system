import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationBrowser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-browser_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-browser_svg__a"
      d="M23.5 2a1 1 0 00-1-1h-21a1 1 0 00-1 1v16a1 1 0 001 1H16v4l4-4h2.5a1 1 0 001-1zM3.5 17a4.5 4.5 0 019 0"
    />,
    <circle
      className="conversation-browser_svg__a"
      cx={8}
      cy={8.75}
      r={2.75}
    />,
    <path
      className="conversation-browser_svg__a"
      d="M13.968 12.984A4.5 4.5 0 0120.5 17"
    />,
    <circle
      className="conversation-browser_svg__a"
      cx={16}
      cy={8.75}
      r={2.75}
    />
  );

export default SvgConversationBrowser;
