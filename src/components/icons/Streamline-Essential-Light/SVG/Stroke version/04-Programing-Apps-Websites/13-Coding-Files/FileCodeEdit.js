import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-edit_svg__a"
      d="M22.9 15.123l-7.63 7.631-3.75.75.75-3.75 7.63-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.991zM8.516 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.516 5.504v4M12.516 5.504v4M9.516 12.504v4M15.516 5.504v4"
    />,
    <path
      className="file-code-edit_svg__a"
      d="M8.016 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0V7a1.5 1.5 0 011.5-1.5zM5.016 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeEdit;
