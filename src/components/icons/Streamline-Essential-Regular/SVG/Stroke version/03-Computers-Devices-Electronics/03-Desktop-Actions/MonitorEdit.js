import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".monitor-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="monitor-edit_svg__a"
      d="M8.25 20.25l.75-4.5M6 20.25h3M.75 12.75h13.706M11.25 15.75h-7.5a3 3 0 01-3-3v-9a3 3 0 013-3h16.5a3 3 0 013 3V9M22.631 14.869L15 22.5l-3.75.75.75-3.75 7.631-7.631a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 010 2.991z"
    />
  );

export default SvgMonitorEdit;
