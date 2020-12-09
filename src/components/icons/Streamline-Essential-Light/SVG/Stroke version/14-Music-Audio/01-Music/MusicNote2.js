import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-note-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-note-2_svg__a"
      d="M9.5 20.005a3.106 3.106 0 01-3 3 3 3 0 010-6h3zM20.5 16.005a3.106 3.106 0 01-3 3 3 3 0 110-6h3z"
    />,
    <path
      className="music-note-2_svg__a"
      d="M9.5 17.005V5.677a1 1 0 01.621-.926l9-3.682A1 1 0 0120.5 2v11.01M9.5 8.505l11-4.5"
    />
  );

export default SvgMusicNote2;
