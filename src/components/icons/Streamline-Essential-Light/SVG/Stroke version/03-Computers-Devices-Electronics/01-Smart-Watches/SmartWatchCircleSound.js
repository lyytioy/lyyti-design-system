import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-sound_svg__a"
      d="M7.328 4.897L8.5.5h7l1.172 4.398M7.31 19.037L8.5 23.5h7l1.206-4.42"
    />,
    <circle
      className="smart-watch-circle-sound_svg__a"
      cx={12}
      cy={12}
      r={8.5}
    />,
    <path
      className="smart-watch-circle-sound_svg__a"
      d="M15.085 16.5a6.36 6.36 0 000-8M13.675 10.167a3.711 3.711 0 010 4.666M11 9.5a2.99 2.99 0 00-2.816 2H6.5v2h1.684a2.99 2.99 0 002.816 2h.5v-6z"
    />
  );

export default SvgSmartWatchCircleSound;
