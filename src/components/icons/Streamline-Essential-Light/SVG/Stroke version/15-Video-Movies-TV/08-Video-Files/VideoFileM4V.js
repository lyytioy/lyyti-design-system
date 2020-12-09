import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileM4V = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-m4v_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-m4v_svg__a"
      d="M20.5 23.5a1 1 0 001-1V6.475A5.975 5.975 0 0015.525.5H3.5a1 1 0 00-1 1v21a1 1 0 001 1z"
    />,
    <path
      className="video-file-m4v_svg__a"
      d="M16.5.58V4.5a1 1 0 001 1h3.92M5.5 18.5v-6l1.5 3 1.5-3v6M13.487 18.5v-2M13.487 16.5v-3.99A5.5 5.5 0 0010.5 16.5h2.987M18.5 12.5V14a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5v-1.5"
    />
  );

export default SvgVideoFileM4V;
