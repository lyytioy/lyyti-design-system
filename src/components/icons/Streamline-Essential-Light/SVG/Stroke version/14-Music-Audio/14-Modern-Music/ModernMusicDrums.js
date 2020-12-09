import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernMusicDrums = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-music-drums_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="modern-music-drums_svg__a"
      d="M8.6 12.207l-2.38-.536a1 1 0 01-.757-1.195L5.9 8.524a1 1 0 011.2-.756l2.926.659a1 1 0 01.756 1.2l-.37 1.645M15.4 12.207l2.384-.536a1 1 0 00.757-1.195L18.1 8.524a1 1 0 00-1.2-.756l-2.926.659a1 1 0 00-.756 1.2l.37 1.645M15.911 20.401L17 22.034M8.089 20.401L7 22.034"
    />,
    <circle
      className="modern-music-drums_svg__a"
      cx={12}
      cy={16.534}
      r={5.5}
    />,
    <path
      className="modern-music-drums_svg__a"
      d="M.5 22.049l2-1.5 2 1.5M2.5 20.549v-14M.5 8.549l4.5-4.5M8.354 5.049l-6.708-2a3.972 3.972 0 013.925-.917 3.972 3.972 0 012.783 2.917zM23.5 22.049l-2-1.5-2 1.5M21.5 20.549v-14M23.5 8.549l-4.5-4.5M15.646 5.049l6.708-2a4.062 4.062 0 00-6.708 2z"
    />
  );

export default SvgModernMusicDrums;
