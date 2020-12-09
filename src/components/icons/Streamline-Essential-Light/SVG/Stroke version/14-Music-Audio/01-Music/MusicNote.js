import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-note_svg__a"
      d="M12.5 19a3.106 3.106 0 01-3 3 3 3 0 010-6h3zM12.5 16V4.677a1 1 0 01.629-.928L17.5 2M12.5 7.5l5-2"
    />
  );

export default SvgMusicNote;
