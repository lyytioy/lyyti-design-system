import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSmileType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-smile-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-smile-type_svg__a"
      d="M9.425 19.575L7.5 21.5v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h18a1 1 0 011 1v7"
    />,
    <path
      className="conversation-smile-type_svg__a"
      d="M11.5 18.5a1 1 0 001 1h4l4 4v-4h2a1 1 0 001-1v-7a1 1 0 00-1-1h-10a1 1 0 00-1 1z"
    />,
    <path
      className="conversation-smile-type_svg__a"
      d="M14.5 14.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 14.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M20.5 14.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M7.5 4.5v2M13.5 4.5v2M9.473 13.5a5.98 5.98 0 01-3.216-1.669"
    />
  );

export default SvgConversationSmileType;
