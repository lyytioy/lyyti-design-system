import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicDrums = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-drums_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="modern-music-drums_svg__a"
      cx={12}
      cy={17.25}
      r={5.25}
    />,
    <path
      className="modern-music-drums_svg__a"
      d="M7.99 20.639L6.75 22.5M16.01 20.639l1.24 1.861M.75 22.5l1.5-1.5M3.755 7.505L5.25 6M3.75 22.5L2.25 21V10.864a4.5 4.5 0 011.505-3.359M6 9.75l-4.5-4.5M23.25 22.5l-1.5-1.5M20.245 3.755L18.75 2.25M20.25 22.5l1.5-1.5V7.114a4.5 4.5 0 00-1.5-3.359M18 6l4.5-4.5"
    />
  );

export default SvgModernMusicDrums;
