import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMusicGenreChoose = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".music-genre-choose_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="music-genre-choose_svg__a"
      d="M2.272 10.493A1.453 1.453 0 013.651 9.5 1.453 1.453 0 015.1 10.953a1.325 1.325 0 01-.387.934L2.1 14.5h3M2.1 19.5a1 1 0 011-1h.756a1.249 1.249 0 010 2.5 1.249 1.249 0 010 2.5H3.1a1 1 0 01-1-1M4.1 5.5V1a.5.5 0 00-.8-.4l-1.2.9M3.104 5.5h2M12.604 11.5h9M12.811 6.5a.5.5 0 01-.354-.854l4.293-4.292a.5.5 0 01.707 0l4.293 4.292a.5.5 0 01-.35.854zM12.811 16.5a.5.5 0 00-.354.854l4.293 4.292a.5.5 0 00.707 0l4.293-4.292a.5.5 0 00-.35-.854z"
    />
  );

export default SvgMusicGenreChoose;
