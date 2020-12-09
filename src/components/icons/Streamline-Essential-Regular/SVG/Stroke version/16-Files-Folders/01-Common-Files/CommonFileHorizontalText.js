import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileHorizontalText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-horizontal-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-horizontal-text_svg__a"
      d="M5.25 7.477h6M5.25 11.977h7.5M5.25 16.477h13.5M2.25 3.023a1.5 1.5 0 00-1.5 1.5v14.954a1.5 1.5 0 001.5 1.5h19.5a1.5 1.5 0 001.5-1.5v-12a1.5 1.5 0 00-.426-1.047l-2.883-2.955a1.5 1.5 0 00-1.074-.452z"
    />
  );

export default SvgCommonFileHorizontalText;
