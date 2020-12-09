import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293zM6 16h12M6 19h12M6 13h12M6 10h12M6 7h7M6 7h7M6 10h12M6 13h12M6 16h12M6 19h12"
    />
  );

export default SvgCommonFileText;
