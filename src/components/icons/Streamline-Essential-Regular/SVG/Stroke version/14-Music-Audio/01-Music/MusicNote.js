import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicNote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-note_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="music-note_svg__a" cx={8.962} cy={18.816} r={3.75} />,
    <path
      className="music-note_svg__a"
      d="M12.712 18.816V5.4a3 3 0 012.052-2.846l4.024-1.117M12.712 7.397l5.596-1.678"
    />
  );

export default SvgMusicNote;
