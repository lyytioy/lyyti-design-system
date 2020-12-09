import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicEar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-ear_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-ear_svg__a"
      d="M4.3 17.017A9.752 9.752 0 014.914 1.5M7.555 14.573a6.751 6.751 0 01-.214-9.965M23.149 7.066a6.75 6.75 0 10-10.564 6.66A3.83 3.83 0 0114.3 17.36a4.494 4.494 0 003.643 5.069A4.5 4.5 0 0023.25 18M20.058 8.42a2.75 2.75 0 10-5.458.68"
    />
  );

export default SvgMusicEar;
