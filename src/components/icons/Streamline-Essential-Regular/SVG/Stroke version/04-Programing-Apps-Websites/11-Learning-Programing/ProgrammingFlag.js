import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgProgrammingFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".programming-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="programming-flag_svg__a"
      d="M.75 23.253V.753M.75 18.373L3.9 17.4a9.607 9.607 0 017.864 1 9.615 9.615 0 007.679 1.056l2.987-.854a1.125 1.125 0 00.816-1.082V4.651a1.126 1.126 0 00-1.434-1.082l-2.369.677a9.611 9.611 0 01-7.675-1.056 9.614 9.614 0 00-7.864-1L.75 3.16z"
    />,
    <path
      className="programming-flag_svg__a"
      d="M15.424 7.601l2.935 2.935-2.935 2.935M8.576 7.601l-2.935 2.935 2.935 2.935M12.978 7.601l-1.956 5.87"
    />
  );

export default SvgProgrammingFlag;
