import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-remove_svg__a"
      d="M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.75 23.25l6.474-3.084A10.652 10.652 0 009 21.05"
    />,
    <circle
      className="messages-bubble-remove_svg__a"
      cx={17.25}
      cy={17.25}
      r={6}
    />,
    <path
      className="messages-bubble-remove_svg__a"
      d="M19.5 15L15 19.5M15 15l4.5 4.5"
    />
  );

export default SvgMessagesBubbleRemove;
