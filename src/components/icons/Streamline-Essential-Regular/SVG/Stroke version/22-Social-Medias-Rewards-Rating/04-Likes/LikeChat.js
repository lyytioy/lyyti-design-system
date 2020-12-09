import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikeChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".like-chat_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="like-chat_svg__a"
      d="M6.75 13.55v-4.9h.7a3.5 3.5 0 003.5-3.5 1.4 1.4 0 011.4-1.4 1.9 1.9 0 011.9 1.9v.9a.7.7 0 00.7.7h.2a2.1 2.1 0 012.089 2.309l-.217 2.17a2.8 2.8 0 01-2.786 2.521h-2.894a2.779 2.779 0 01-.769-.108l-1.7-.484a2.779 2.779 0 00-.769-.108H6.75"
    />,
    <path
      className="like-chat_svg__a"
      d="M21.75 18.75h-10.5l-6 4.5v-4.5h-3a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v15a1.5 1.5 0 01-1.5 1.5z"
    />
  );

export default SvgLikeChat;
