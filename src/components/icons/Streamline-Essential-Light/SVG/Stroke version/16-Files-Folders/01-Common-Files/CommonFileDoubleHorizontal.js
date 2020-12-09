import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileDoubleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-double-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-double-horizontal_svg__a"
      d="M19.5 3.793a1 1 0 00-.707-.293H5.5a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V7.207a1 1 0 00-.293-.707z"
    />,
    <path
      className="common-file-double-horizontal_svg__a"
      d="M4.5 6.5h-2a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1v-2"
    />
  );

export default SvgCommonFileDoubleHorizontal;
