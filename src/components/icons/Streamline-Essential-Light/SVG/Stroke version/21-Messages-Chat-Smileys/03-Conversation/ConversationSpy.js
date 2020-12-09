import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSpy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-spy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-spy_svg__a"
      d="M14.5 5.71a2 2 0 01-1.779 1.99l-6.666.74a.5.5 0 01-.555-.5V1.059a.5.5 0 01.555-.5l6.666.74A2 2 0 0114.5 3.29zM9.5 18.29a2 2 0 011.779-1.99l6.666-.74a.5.5 0 01.555.5v6.882a.5.5 0 01-.555.5l-6.666-.74A2 2 0 019.5 20.71z"
    />,
    <path
      className="conversation-spy_svg__a"
      d="M9.5 19.5H4a3.5 3.5 0 010-7h15.5a4 4 0 000-8h-5M.5 4.5h3M.5.5l3 1M.5 8.5l3-1M23.5 19.5h-3M23.5 23.5l-3-1M23.5 15.5l-3 1"
    />
  );

export default SvgConversationSpy;
