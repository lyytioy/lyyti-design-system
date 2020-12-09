import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-double_svg__a"
      d="M17.086.5a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V19.5a1 1 0 01-1 1h-14a1 1 0 01-1-1v-18a1 1 0 011-1z"
    />,
    <path
      className="common-file-double_svg__a"
      d="M18.5 20.5v2a1 1 0 01-1 1h-14a1 1 0 01-1-1v-18a1 1 0 011-1h2"
    />
  );

export default SvgCommonFileDouble;
