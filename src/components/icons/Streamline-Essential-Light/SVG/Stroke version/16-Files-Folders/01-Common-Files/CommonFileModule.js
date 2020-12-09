import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileModule = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-module_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-module_svg__a"
      d="M9.707 3.207a1 1 0 01.293.708V9.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1h3.586a1 1 0 01.707.293zM9.707 16.207a1 1 0 01.293.708V22.5a1 1 0 01-1 1H3a1 1 0 01-1-1v-8a1 1 0 011-1h3.586a1 1 0 01.707.293zM21.707 3.207a1 1 0 01.293.708V9.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8a1 1 0 011-1h3.586a1 1 0 01.707.293zM21.707 16.207a1 1 0 01.293.708V22.5a1 1 0 01-1 1h-6a1 1 0 01-1-1v-8a1 1 0 011-1h3.586a1 1 0 01.707.293z"
    />
  );

export default SvgCommonFileModule;
