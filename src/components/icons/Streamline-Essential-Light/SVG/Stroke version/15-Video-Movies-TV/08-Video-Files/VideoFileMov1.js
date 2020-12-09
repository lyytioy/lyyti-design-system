import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileMov1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-mov-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-mov-1_svg__a"
      d="M19.5 12.5V6.475A5.975 5.975 0 0013.525.5H1.5a1 1 0 00-1 1v21a1 1 0 001 1h3"
    />,
    <path
      className="video-file-mov-1_svg__a"
      d="M14.5.58V4.5a1 1 0 001 1h3.92M7.5 23.5v-8l2 4 2-4v8M17.5 21.5a2 2 0 01-4 0v-4a2 2 0 014 0zM23.5 15.5v2.3a9.124 9.124 0 01-2 5.7 9.124 9.124 0 01-2-5.7v-2.3"
    />
  );

export default SvgVideoFileMov1;
