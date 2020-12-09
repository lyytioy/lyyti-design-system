import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicClef = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-clef_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="music-clef_svg__a"
      d="M12.73 18.174a23.567 23.567 0 01.354 2.63 2.374 2.374 0 01-2.445 2.446 2.446 2.446 0 01-2.446-2.45"
    />,
    <path
      className="music-clef_svg__a"
      d="M11.418 15.521a1.982 1.982 0 011.666-3.032c1.081 0 1.957.978 1.957 2.446a3.424 3.424 0 01-6.848 0c0-2.7 2.036-4.248 4.891-5.381 3.474-1.378 3.424-8.8.979-8.8s-2.935 4.4-2.935 6.848a44 44 0 00.7 5.348"
    />
  );

export default SvgMusicClef;
