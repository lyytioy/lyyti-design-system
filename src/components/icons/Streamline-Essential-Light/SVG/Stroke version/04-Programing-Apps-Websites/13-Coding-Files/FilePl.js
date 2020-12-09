import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilePl = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-pl_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-pl_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-pl_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M11.5 14a1.5 1.5 0 01-1.5 1.5H8.5v-3H10a1.5 1.5 0 011.5 1.5zM8.5 18.504v-3M13.5 12.5v5a1 1 0 001 1h2"
    />
  );

export default SvgFilePl;
