import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingLaptopType = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-laptop-type_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-laptop-type_svg__a"
      d="M.75 23.25s-.015-4.266 1.4-6.738A3 3 0 014.753 15h2.632a.751.751 0 01.743.856L7.5 20.25c3.75-2.25 3.75 0 1.5 3M23.25 23.25s.015-4.266-1.4-6.738A3 3 0 0019.247 15h-2.632a.751.751 0 00-.743.856l.628 4.394c-3.75-2.25-3.75 0-1.5 3M5.25 9V2.25a1.5 1.5 0 011.5-1.5h10.5a1.5 1.5 0 011.5 1.5V9M3 9c0 2.071 1.679 3 3.75 3h10.5c2.071 0 3.75-.929 3.75-3z"
    />
  );

export default SvgProgrammingLaptopType;
