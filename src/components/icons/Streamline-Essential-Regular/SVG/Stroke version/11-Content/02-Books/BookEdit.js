import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-edit_svg__a"
      d="M8.249 23.25H3A2.25 2.25 0 01.751 21M18.751 9V1.5A.75.75 0 0018 .75H3.751a3 3 0 00-3 3V21A2.25 2.25 0 013 18.75h6M22.629 14.87L15 22.5l-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.116 2.116 0 01-.001 2.992z"
    />
  );

export default SvgBookEdit;
