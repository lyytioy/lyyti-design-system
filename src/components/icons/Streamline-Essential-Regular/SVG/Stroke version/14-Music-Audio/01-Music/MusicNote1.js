import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-note-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="music-note-1_svg__a" cx={9} cy={18.75} r={3.75} />,
    <path
      className="music-note-1_svg__a"
      d="M12.75 18.75V1.5M12.75 2.867l3.576 2.184c2.439 1.885 3.1 4.511 1.7 6.816"
    />
  );

export default SvgMusicNote1;
