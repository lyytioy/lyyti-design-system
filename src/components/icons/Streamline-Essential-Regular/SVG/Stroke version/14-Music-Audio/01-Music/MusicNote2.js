import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-note-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="music-note-2_svg__a" cx={4.5} cy={19.5} r={3.75} />,
    <circle className="music-note-2_svg__a" cx={19.5} cy={15} r={3.75} />,
    <path
      className="music-note-2_svg__a"
      d="M8.25 19.5V6.719a3 3 0 012.05-2.846L21.348.805a1.5 1.5 0 011.9 1.445V15M8.25 8.719l15-4.5"
    />
  );

export default SvgMusicNote2;
