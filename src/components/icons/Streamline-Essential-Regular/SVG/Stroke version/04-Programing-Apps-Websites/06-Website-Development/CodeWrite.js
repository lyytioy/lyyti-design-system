import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCodeWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".code-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="code-write_svg__a"
      d="M22.631 14.87L15 22.5l-3.75.75.75-3.75 7.631-7.63a2.113 2.113 0 012.991 0l.009.008a2.116 2.116 0 010 2.992zM8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h8.379a1.5 1.5 0 011.06.439l3.622 3.622a1.5 1.5 0 01.439 1.06v5.372M3.75 5.25h3M3.75 9.75h3M3.75 14.25h3M9.75 5.25v9M12.75 9.75h-3"
    />
  );

export default SvgCodeWrite;
