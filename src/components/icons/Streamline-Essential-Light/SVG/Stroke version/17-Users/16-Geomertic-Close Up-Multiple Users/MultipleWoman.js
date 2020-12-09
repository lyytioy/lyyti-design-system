import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-woman_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="multiple-woman_svg__cls-1"
      d="M21.6 12.11a5.515 5.515 0 01-.8-3.054V7.807a4.3 4.3 0 00-7.311-3.063"
    />,
    <path
      className="multiple-woman_svg__cls-1"
      d="M14.5 8.029a5.793 5.793 0 002-1.482 5.685 5.685 0 004.3 1.97M20.286 8.494a3.791 3.791 0 01-5.655 3.121M14.5 13.8a7.005 7.005 0 019 6.71H17M.5 20.512a7 7 0 0114 0zM12.6 12.11a5.515 5.515 0 01-.8-3.054V7.807a4.3 4.3 0 10-8.593 0v1.249a5.515 5.515 0 01-.8 3.054"
    />,
    <path
      className="multiple-woman_svg__cls-1"
      d="M3.2 8.517a5.689 5.689 0 004.3-1.97 5.685 5.685 0 004.3 1.97M11.286 8.494a3.791 3.791 0 01-7.573 0"
    />
  );

export default SvgMultipleWoman;
