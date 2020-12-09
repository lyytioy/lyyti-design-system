import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-typing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-typing_svg__a"
      d="M8.25 8.25a.375.375 0 00-.375-.375M7.875 7.875a.375.375 0 10.375.375M12.375 7.875a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle
      className="messages-bubble-typing_svg__a"
      cx={6.375}
      cy={20.625}
      r={1.875}
    />,
    <path
      className="messages-bubble-typing_svg__a"
      d="M1.125 22.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M17.25 8.25a.375.375 0 00-.375-.375M16.5 8.25a.375.375 0 00.75 0M16.875 7.875a.375.375 0 00-.375.375"
    />,
    <path
      className="messages-bubble-typing_svg__a"
      d="M3.786 6.365A3.667 3.667 0 013.75 6a3.746 3.746 0 016.368-2.679A7.493 7.493 0 1115.75 15.75H5.625a4.872 4.872 0 01-1.839-9.385z"
    />
  );

export default SvgMessagesBubbleTyping;
