import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCPlusPlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-c-plus-plus_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-c-plus-plus_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-c-plus-plus_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M11.5 13.504v4M13.5 15.504h-4M17.5 13.504v4M19.5 15.504h-4M7.5 18.5a3 3 0 010-6"
    />
  );

export default SvgFileCPlusPlus;
