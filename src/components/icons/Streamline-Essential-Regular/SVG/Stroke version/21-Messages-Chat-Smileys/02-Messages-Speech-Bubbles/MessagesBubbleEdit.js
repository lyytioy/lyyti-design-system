import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-edit_svg__a"
      d="M22.565 14.867L15.078 22.5l-3.75.75.75-3.75 7.487-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.989zM22.926 8.409A10.5 10.5 0 103.9 16.775L.815 23.25l6.475-3.084a10.618 10.618 0 001.242.663"
    />
  );

export default SvgMessagesBubbleEdit;
