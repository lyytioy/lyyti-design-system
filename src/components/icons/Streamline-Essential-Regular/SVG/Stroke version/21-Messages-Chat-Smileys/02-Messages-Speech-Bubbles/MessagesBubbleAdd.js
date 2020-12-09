import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleAdd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-add_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-add_svg__a"
      d="M23.223 10.5a10.5 10.5 0 10-19.39 6.275L.749 23.25l6.475-3.084A10.614 10.614 0 009 21.05"
    />,
    <circle
      className="messages-bubble-add_svg__a"
      cx={17.25}
      cy={17.249}
      r={6}
    />,
    <path
      className="messages-bubble-add_svg__a"
      d="M17.25 14.249v6M14.25 17.249h6"
    />
  );

export default SvgMessagesBubbleAdd;
