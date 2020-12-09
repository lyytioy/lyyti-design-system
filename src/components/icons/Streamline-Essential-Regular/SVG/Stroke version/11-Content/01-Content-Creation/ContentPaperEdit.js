import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPaperEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-paper-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-paper-edit_svg__a"
      d="M22.627 14.87L15 22.5l-3.75.75.75-3.75 7.631-7.63a2.113 2.113 0 012.991 0l.009.008a2.116 2.116 0 01-.004 2.992zM8.246 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5V9M8.246 5.25h6M5.246 9.75h9M5.246 14.25h7.5"
    />
  );

export default SvgContentPaperEdit;
