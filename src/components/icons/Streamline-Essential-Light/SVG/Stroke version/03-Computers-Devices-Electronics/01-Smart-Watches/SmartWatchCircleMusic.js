import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-music_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-music_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-music_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <circle
      className="smart-watch-circle-music_svg__a"
      cx={9.25}
      cy={14.75}
      r={1.25}
    />,
    <circle
      className="smart-watch-circle-music_svg__a"
      cx={14.25}
      cy={13.25}
      r={1.25}
    />,
    <path
      className="smart-watch-circle-music_svg__a"
      d="M10.5 14.5v-4.279a1 1 0 01.684-.949l3-.833a1 1 0 011.316.948V13"
    />
  );

export default SvgSmartWatchCircleMusic;
