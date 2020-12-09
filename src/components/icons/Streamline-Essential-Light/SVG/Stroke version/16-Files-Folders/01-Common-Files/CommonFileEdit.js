import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-edit_svg__a"
      d="M22.88 15.12l-7.63 7.63-3.75.75.75-3.75 7.63-7.63a2.114 2.114 0 012.992 0l.008.008a2.114 2.114 0 010 2.992zM8.5 23.5h-7a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />
  );

export default SvgCommonFileEdit;
