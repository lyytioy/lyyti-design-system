import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloudOff = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cloud-off_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="cloud-off_svg__a"
      d="M1.752 6.753A7.5 7.5 0 008.25 18h4.5M20.987 17.242a4.873 4.873 0 10-5.376-8.127A7.5 7.5 0 006.833 3.13M2.25 3l18 18"
    />
  );

export default SvgCloudOff;
