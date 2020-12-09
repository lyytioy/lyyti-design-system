import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAppWindowEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".app-window-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="app-window-edit_svg__a"
      d="M21.76 8.253v-6a1.5 1.5 0 00-1.5-1.5h-18a1.5 1.5 0 00-1.5 1.5v16.5a1.5 1.5 0 001.5 1.5h6M.76 5.253h21M22.64 14.873L15.009 22.5l-3.75.75.75-3.75 7.631-7.63a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.994z"
    />
  );

export default SvgAppWindowEdit;
