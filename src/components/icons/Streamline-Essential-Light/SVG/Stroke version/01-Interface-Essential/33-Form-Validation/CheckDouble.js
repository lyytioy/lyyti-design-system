import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="check-double_svg__a"
      d="M7.146 10.853a1.207 1.207 0 011.708 0L11 13l9.146-9.146a1.207 1.207 0 011.708 0l1.292 1.293a1.206 1.206 0 010 1.707L11.854 18.146a1.21 1.21 0 01-1.708 0l-4.292-4.293a1.206 1.206 0 010-1.707zM4.113 11.113l-.259-.26a1.207 1.207 0 00-1.708 0L.854 12.146a1.206 1.206 0 000 1.707l4.292 4.293a1.21 1.21 0 001.708 0l.232-.233M17.086 4.085l-.232-.232a1.207 1.207 0 00-1.708 0L9.884 9.115"
    />
  );

export default SvgCheckDouble;
