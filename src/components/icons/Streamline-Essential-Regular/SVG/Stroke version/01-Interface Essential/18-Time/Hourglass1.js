import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHourglass1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hourglass-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hourglass-1_svg__a"
      d="M6.038 5.478C6.594 8.687 8.548 10.885 12 12c3.452-1.115 5.406-3.313 5.962-6.522a1.5 1.5 0 00-1.491-1.728H7.529a1.5 1.5 0 00-1.491 1.728zM3.75.75h16.5M7.529 20.25a1.5 1.5 0 01-1.491-1.727C6.594 15.314 8.548 13.116 12 12c3.452 1.116 5.406 3.314 5.962 6.523a1.5 1.5 0 01-1.491 1.727zM3.75 23.25h16.5"
    />
  );

export default SvgHourglass1;
