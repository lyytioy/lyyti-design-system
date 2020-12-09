import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAngleBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".angle-brackets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="angle-brackets_svg__a"
      d="M9 3.5l-7.793 7.791a1 1 0 000 1.414L9 20.5M15 3.5l7.793 7.793a1 1 0 010 1.414L15 20.5"
    />
  );

export default SvgAngleBrackets;
