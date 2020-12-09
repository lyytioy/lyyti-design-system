import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeClock1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-clock-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-clock-1_svg__a"
      d="M10.542 23.5h-9a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5"
    />,
    <path
      className="file-code-clock-1_svg__a"
      d="M6.542 7.004l-3 3 3 3M9.542 7.004l3 3-3 3"
    />,
    <circle
      className="file-code-clock-1_svg__a"
      cx={17.542}
      cy={17.504}
      r={6}
    />,
    <path className="file-code-clock-1_svg__a" d="M19.542 17.504h-2v-3" />
  );

export default SvgFileCodeClock1;
