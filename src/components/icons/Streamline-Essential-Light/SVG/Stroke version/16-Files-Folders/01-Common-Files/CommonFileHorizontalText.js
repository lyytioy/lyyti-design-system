import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileHorizontalText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-horizontal-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-horizontal-text_svg__a"
      d="M3.5 7.5h10M3.5 10.5h10M3.5 13.5h17M3.5 16.5h17M19.5 3.793a1 1 0 00-.707-.293H1.5a1 1 0 00-1 1v15a1 1 0 001 1h21a1 1 0 001-1V8.207a1 1 0 00-.293-.707z"
    />
  );

export default SvgCommonFileHorizontalText;
