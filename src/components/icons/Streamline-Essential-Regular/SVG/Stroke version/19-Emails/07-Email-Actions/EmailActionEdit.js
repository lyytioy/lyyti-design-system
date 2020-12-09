import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".email-action-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="email-action-edit_svg__a"
      d="M22.63 14.87L15 22.5l-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM11.25 15.75h-9a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h18a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="email-action-edit_svg__a"
      d="M21.411 1.3l-8.144 6.264a3.308 3.308 0 01-4.034 0L1.089 1.3"
    />
  );

export default SvgEmailActionEdit;
