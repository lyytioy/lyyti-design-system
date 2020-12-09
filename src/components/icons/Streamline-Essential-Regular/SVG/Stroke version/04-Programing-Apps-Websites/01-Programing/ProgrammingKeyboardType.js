import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingKeyboardType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-keyboard-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="programming-keyboard-type_svg__a"
      x={1.494}
      y={1.5}
      width={21}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="programming-keyboard-type_svg__a"
      d="M4.494 4.5h1.5M4.494 7.5h1.5M8.994 4.5h1.5M8.994 7.5h6M13.494 4.5h1.5M17.994 4.5h1.5M17.994 7.5h1.5M.744 22.5s-.015-4.266 1.4-6.738a3 3 0 012.603-1.512h2.632a.751.751 0 01.743.856L7.494 19.5c3.75-2.25 3.75 0 1.5 3M23.244 22.5s.015-4.266-1.4-6.738a3 3 0 00-2.6-1.512h-2.635a.751.751 0 00-.743.856l.628 4.394c-3.75-2.25-3.75 0-1.5 3"
    />
  );

export default SvgProgrammingKeyboardType;
