import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgConversationText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".conversation-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="conversation-text_svg__a"
      d="M6.5 5.5h11M6.5 9.5H12M13.5 14.5h6M13.5 17.5h6M6.5 13.5h2M7.971 18.673l-6.609 3.076 2.588-5.166a8.612 8.612 0 01-3.45-6.7C.5 4.7 5.648.5 12 .5s11.5 4.2 11.5 9.383"
    />,
    <path
      className="conversation-text_svg__a"
      d="M9.7 16.381c0 3.108 3.089 5.629 6.9 5.629a8.276 8.276 0 002.418-.356l3.965 1.846-1.553-3.1a5.166 5.166 0 002.07-4.019c0-3.109-3.089-5.63-6.9-5.63s-6.9 2.521-6.9 5.63z"
    />
  );

export default SvgConversationText;
