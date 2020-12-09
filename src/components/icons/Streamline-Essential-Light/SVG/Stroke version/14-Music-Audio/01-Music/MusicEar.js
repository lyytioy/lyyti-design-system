import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicEar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-ear_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-ear_svg__a"
      d="M22.5 8.816a6.5 6.5 0 10-13 0c0 4.817 4 4.609 4 9a4.5 4.5 0 109 0M4.868 1.684a11.5 11.5 0 000 16.264M7.7 4.513a7.5 7.5 0 000 10.606"
    />,
    <path
      className="music-ear_svg__a"
      d="M19 8.816a3 3 0 00-6 0c0 2.377 2 2.168 2 4a2 2 0 104 0"
    />
  );

export default SvgMusicEar;
