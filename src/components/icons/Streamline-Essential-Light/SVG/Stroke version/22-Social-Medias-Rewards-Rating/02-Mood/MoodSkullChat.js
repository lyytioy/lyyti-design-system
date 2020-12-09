import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodSkullChat = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-skull-chat_svg__a,.mood-skull-chat_svg__b{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}.mood-skull-chat_svg__b{stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-skull-chat_svg__a"
      d="M23.5 17.5a1 1 0 01-1 1h-11l-4 4v-4h-6a1 1 0 01-1-1v-15a1 1 0 011-1h21a1 1 0 011 1zM12.5 12v1.5"
    />,
    <path
      className="mood-skull-chat_svg__a"
      d="M10 13.5v-1.876a4 4 0 115 0V13.5"
    />,
    <path
      className="mood-skull-chat_svg__b"
      d="M11 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M14 7.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgMoodSkullChat;
