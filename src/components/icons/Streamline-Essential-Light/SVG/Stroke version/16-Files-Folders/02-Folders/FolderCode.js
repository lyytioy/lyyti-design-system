import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-code_svg__a"
      d="M11.736 5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 009 2H1.5a1 1 0 00-1 1v18a1 1 0 001 1h21a1 1 0 001-1V6a1 1 0 00-1-1z"
    />,
    <path
      className="folder-code_svg__a"
      d="M14.5 9.5L18 13l-3.5 3.5M9.5 9.5L6 13l3.5 3.5"
    />
  );

export default SvgFolderCode;
