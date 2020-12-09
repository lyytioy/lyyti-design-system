import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKeyboardCommand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".keyboard-command_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="keyboard-command_svg__a"
      d="M.5 20a3.5 3.5 0 007 0v-3.5H4A3.5 3.5 0 00.5 20zM4 .5a3.5 3.5 0 000 7h3.5V4A3.5 3.5 0 004 .5zM20 16.5h-3.5V20a3.5 3.5 0 103.5-3.5zM7.5 7.497h9v9h-9zM23.5 4a3.5 3.5 0 00-7 0v3.5H20A3.5 3.5 0 0023.5 4z"
    />
  );

export default SvgKeyboardCommand;
