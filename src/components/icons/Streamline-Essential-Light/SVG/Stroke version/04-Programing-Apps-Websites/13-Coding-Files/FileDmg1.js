import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileDmg1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-dmg-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-dmg-1_svg__a"
      d="M7.5 15.5a4 4 0 010 8zM13.5 23.504v-8l2 4 2-4v8M23.5 17.5a2 2 0 10-4 0v4a2 2 0 104 0v-1H22"
    />,
    <path
      className="file-dmg-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1H4"
    />,
    <path className="file-dmg-1_svg__a" d="M14.5.584V4.5a1 1 0 001 1h3.92" />
  );

export default SvgFileDmg1;
