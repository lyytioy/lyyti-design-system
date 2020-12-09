import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      d="M22.5 21.8a1.54 1.54 0 01-1.5 1.5H3a1.54 1.54 0 01-1.5-1.5V2.2A1.54 1.54 0 013 .7h15a1.53 1.53 0 011 .4L22 4a1.61 1.61 0 01.5 1.1z"
      transform="translate(-.75 .05)"
      className="common-file-text_svg__a"
    />,
    <path
      className="common-file-text_svg__a"
      d="M5.34 9.68h4.93M5.06 13.68h11.27M5.06 17.68h11.27"
    />
  );

export default SvgCommonFileText;
