import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="microphone_svg__a"
      d="M12 18.5v5M12 .5a4 4 0 00-4 4v7a4 4 0 008 0v-7a4 4 0 00-4-4z"
    />,
    <path className="microphone_svg__a" d="M19 8.5v3a7 7 0 01-14 0v-3" />
  );

export default SvgMicrophone;
