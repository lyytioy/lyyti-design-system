import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="laptop-edit_svg__a"
      d="M22.63 14.87L15 22.5l-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6"
    />,
    <path
      className="laptop-edit_svg__a"
      d="M12.75 12h-12a3.75 3.75 0 003.75 3.75h6"
    />
  );

export default SvgLaptopEdit;
