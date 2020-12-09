import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsSquareWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-square-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-square-warning_svg__a"
      d="M3.75 10.747V17.5a3 3 0 003 3h10.5a3 3 0 003-3v-.75M20.25 13.747V7a3 3 0 00-3-3H6.75a3 3 0 00-3 3v.75"
    />,
    <path
      className="synchronize-arrows-square-warning_svg__a"
      d="M6.75 13.747l-3-3-3 3M17.25 10.747l3 3 3-3M12 7.021v6M12 16.4a.375.375 0 10.375.375A.375.375 0 0012 16.4"
    />
  );

export default SvgSynchronizeArrowsSquareWarning;
