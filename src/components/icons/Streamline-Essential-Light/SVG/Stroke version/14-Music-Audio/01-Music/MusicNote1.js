import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-note-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-note-1_svg__a"
      d="M12.721 19a3.1 3.1 0 01-3 3 3 3 0 010-6h3zM12.721 16V2a3.238 3.238 0 001.5 3c4.8 3.2 2.808 7.378 1.613 10.5"
    />
  );

export default SvgMusicNote1;
