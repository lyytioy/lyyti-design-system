import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-check_svg__a"
      d="M.75 23.25V.75M.75 20.293l3.154-.97a9.61 9.61 0 017.864 1 9.615 9.615 0 007.679 1.056l2.987-.853a1.126 1.126 0 00.816-1.082V3.637a1.126 1.126 0 00-1.434-1.082l-2.369.677a9.615 9.615 0 01-7.679-1.056 9.61 9.61 0 00-7.864-1L.75 2.145"
    />,
    <path className="flag-check_svg__a" d="M16.5 8.25l-4.5 6-3-3" />
  );

export default SvgFlagCheck;
