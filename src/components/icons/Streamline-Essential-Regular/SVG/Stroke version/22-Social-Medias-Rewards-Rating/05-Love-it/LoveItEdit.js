import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="love-it-edit_svg__a"
      d="M22.628 14.868L15 22.5l-3.75.75.75-3.75 7.631-7.63a2.115 2.115 0 012.991 0l.009.009a2.115 2.115 0 01-.003 2.989zM8.223 16.5l-5.811-6.063a5.673 5.673 0 01-1.063-6.549 5.673 5.673 0 019.085-1.474L12 3.98l1.566-1.566a5.673 5.673 0 019.085 1.474A5.676 5.676 0 0122.632 9"
    />
  );

export default SvgLoveItEdit;
