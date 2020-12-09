import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileDmg = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-dmg_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-dmg_svg__a"
      d="M5.5 12.5a3 3 0 010 6zM10.5 18.504v-6l1.5 3 1.5-3v6M18.5 14.5V14a1.5 1.5 0 10-3 0v3a1.5 1.5 0 103 0v-.5h-1"
    />,
    <path
      className="file-dmg_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.478A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path className="file-dmg_svg__a" d="M16.5.584V4.5a1 1 0 001 1h3.92" />
  );

export default SvgFileDmg;
