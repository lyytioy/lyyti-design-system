import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFilePy1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-py-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-py-1_svg__a"
      d="M19.5 12.5V6.478A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h9"
    />,
    <path
      className="file-py-1_svg__a"
      d="M14.5.584V4.5a1 1 0 001 1h3.92M23.5 15.5v2a2 2 0 11-4 0v-2M21.5 19.504v4M17.5 17.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM13.5 23.504v-4"
    />
  );

export default SvgFilePy1;
