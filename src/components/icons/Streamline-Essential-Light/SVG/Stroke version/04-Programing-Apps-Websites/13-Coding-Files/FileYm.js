import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileYm = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-ym_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-ym_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="file-ym_svg__a"
      d="M16.5.584V4.5a1 1 0 001 1h3.92M13.5 18.504v-6l1.5 3 1.5-3v6M9.5 15.504v3M7.5 12.5v1a2 2 0 004 0v-1"
    />
  );

export default SvgFileYm;
