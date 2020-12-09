import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManFlag2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-flag-2_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="single-man-flag-2_svg__cls-1"
      d="M12.75 9v14.25M12.75 17.267l1.505-.509a4.249 4.249 0 013.745.509 4.246 4.246 0 003.745.509l1.5-.509V8.983l-1.5.508A4.249 4.249 0 0118 8.983a4.246 4.246 0 00-3.745-.509l-1.505.509z"
    />,
    <circle
      className="single-man-flag-2_svg__cls-1"
      cx={5.25}
      cy={3.75}
      r={3}
    />,
    <path
      className="single-man-flag-2_svg__cls-1"
      d="M5.25 8.25v6M9.19 10.575A4.5 4.5 0 00.75 12.75v3h1.5l.75 7.5h4.5l.51-5.1"
    />
  );

export default SvgSingleManFlag2;
