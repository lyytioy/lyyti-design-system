import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleSquareEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".messages-bubble-square-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="messages-bubble-square-edit_svg__a"
      d="M8.22 19.9l-4.47 3.35v-4.5h-1.5a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h19.5a1.5 1.5 0 011.5 1.5v6M22.63 14.867L15 22.5l-3.75.75.75-3.75 7.63-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.989z"
    />
  );

export default SvgMessagesBubbleSquareEdit;
