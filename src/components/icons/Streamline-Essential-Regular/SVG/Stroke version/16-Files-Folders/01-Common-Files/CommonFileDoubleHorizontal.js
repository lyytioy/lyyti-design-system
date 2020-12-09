import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileDoubleHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-double-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="common-file-double-horizontal_svg__a"
      d="M.75 7.5v12a1.5 1.5 0 001.5 1.5h16.5"
    />,
    <path
      className="common-file-double-horizontal_svg__a"
      d="M4.824 3A1.074 1.074 0 003.75 4.074v12.852A1.074 1.074 0 004.824 18h17.352a1.074 1.074 0 001.074-1.074V6.189a1.078 1.078 0 00-.3-.75l-2.069-2.115A1.074 1.074 0 0020.113 3z"
    />
  );

export default SvgCommonFileDoubleHorizontal;
