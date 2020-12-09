import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code_svg__a"
      d="M21.207 4.5a1 1 0 01.293.707V22.5a1 1 0 01-1 1h-17a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3z"
    />,
    <path
      className="file-code_svg__a"
      d="M10 9.004l-3.5 3.5 3.5 3.5M14 9.004l3.5 3.5-3.5 3.5"
    />
  );

export default SvgFileCode;
