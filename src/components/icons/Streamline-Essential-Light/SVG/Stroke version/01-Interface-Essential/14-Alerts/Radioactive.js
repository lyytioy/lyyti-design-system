import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioactive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".radioactive_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="radioactive_svg__a"
      d="M10.4 15.164a.5.5 0 00-.634.208l-3.26 5.644a.5.5 0 00.2.694 11.488 11.488 0 0010.582 0 .5.5 0 00.25-.3.5.5 0 00-.048-.39l-3.258-5.644a.5.5 0 00-.634-.208 3.974 3.974 0 01-3.2 0zM15.977 11.552a.5.5 0 00.5.449h6.515a.5.5 0 00.5-.523A12.412 12.412 0 0018.2 1.82a.5.5 0 00-.707.168l-3.265 5.653a.5.5 0 00.119.639 5.068 5.068 0 011.63 3.272zM7.526 12a.5.5 0 00.5-.449A5.064 5.064 0 019.653 8.28a.5.5 0 00.118-.638L6.508 1.988A.5.5 0 005.8 1.82a12.4 12.4 0 00-5.288 9.658.5.5 0 00.5.523zM10 11.5a2 2 0 112 2 2.018 2.018 0 01-2-2z"
    />
  );

export default SvgRadioactive;
