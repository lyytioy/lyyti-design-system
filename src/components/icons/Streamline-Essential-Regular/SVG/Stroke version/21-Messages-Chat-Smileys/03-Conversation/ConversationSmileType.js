import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationSmileType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-smile-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="conversation-smile-type_svg__a"
      d="M8.25 18l-3 2.25v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v4.5M5.993 10.7A11.148 11.148 0 009 11.774M6.75 5.25v1.5M14.25 5.25v1.5"
    />,
    <path
      className="conversation-smile-type_svg__a"
      d="M23.25 18.75h-3v4.5l-4.5-4.5h-4.5v-9h12v9zM14.25 13.875"
    />,
    <path
      className="conversation-smile-type_svg__a"
      d="M14.25 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375M20.25 13.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />
  );

export default SvgConversationSmileType;
