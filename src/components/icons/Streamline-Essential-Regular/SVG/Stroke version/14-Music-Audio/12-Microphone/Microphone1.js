import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophone1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-1_svg__a"
      d="M16.65 16.95l-2 1.5a1.5 1.5 0 01-.9.3h-3.5a1.5 1.5 0 01-.9-.3l-2-1.5a1.5 1.5 0 01-.6-1.2V3.165a1.489 1.489 0 01.814-1.344 9.722 9.722 0 018.872 0 1.489 1.489 0 01.814 1.344V15.75a1.5 1.5 0 01-.6 1.2zM6.75 8.25h10.5M6.75 11.25h10.5"
    />,
    <path
      className="microphone-1_svg__a"
      d="M10.5 11.25v2.25A1.5 1.5 0 0012 15a1.5 1.5 0 001.5-1.5v-2.25M9.735 18.659l.765 4.591h3l.765-4.591"
    />
  );

export default SvgMicrophone1;
