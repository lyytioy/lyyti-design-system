import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="file-code_svg__a"
      d="M22.5 21.753a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-19.5A1.5 1.5 0 013 .753h15.045a1.5 1.5 0 011.048.427l2.955 2.882a1.5 1.5 0 01.452 1.074z"
    />,
    <path
      className="file-code_svg__a"
      d="M14.295 9.003l3.75 3.75-3.75 3.75M9.795 9.003l-3.75 3.75 3.75 3.75"
    />
  );

export default SvgFileCode;
