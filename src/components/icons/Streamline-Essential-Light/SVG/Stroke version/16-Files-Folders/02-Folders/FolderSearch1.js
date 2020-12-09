import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderSearch1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-search-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-search-1_svg__a"
      d="M11.736 5a1 1 0 01-.894-.553l-.948-1.894A1 1 0 009 2H1.5a1 1 0 00-1 1v18a1 1 0 001 1h21a1 1 0 001-1V6a1 1 0 00-1-1z"
    />,
    <circle className="folder-search-1_svg__a" cx={11} cy={12.5} r={4} />,
    <path className="folder-search-1_svg__a" d="M13.828 15.328L17 18.5" />
  );

export default SvgFolderSearch1;
