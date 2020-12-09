import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain-2_svg__a"
      d="M2.25.75v22.5M2.25 2.25H21a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H2.25"
    />
  );

export default SvgFlagPlain2;
