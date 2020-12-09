import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAngleBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".angle-brackets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="angle-brackets_svg__a"
      d="M7.629 4.5l-6.44 6.439a1.5 1.5 0 000 2.121l6.44 6.44M16.371 4.5l6.44 6.439a1.5 1.5 0 010 2.121l-6.44 6.44"
    />
  );

export default SvgAngleBrackets;
