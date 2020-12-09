import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain-2_svg__a"
      d="M4.5 1.5h16a1 1 0 011 1v10a1 1 0 01-1 1h-16M2.5.5v23"
    />
  );

export default SvgFlagPlain2;
