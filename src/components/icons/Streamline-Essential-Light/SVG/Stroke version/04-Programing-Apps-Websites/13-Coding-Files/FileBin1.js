import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileBin1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-bin-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-bin-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h3"
    />,
    <path
      className="file-bin-1_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M15.5 15.504v8M13.5 23.504h4M13.5 15.504h4M11.5 17.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM11.5 21.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM19.5 23.504v-8l4 8v-8"
    />
  );

export default SvgFileBin1;
