import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="like-chat_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1z"
    />,
    <path
      className="like-chat_svg__a"
      d="M7.5 8.5h1v7h-1M8.5 9v5l2.934 1.257a3 3 0 001.182.243h3.163a1 1 0 00.949-.684l1.333-4a1 1 0 00-.948-1.316H14.5v-4a1 1 0 00-2 0A3.5 3.5 0 019 9z"
    />
  );

export default SvgLikeChat;
