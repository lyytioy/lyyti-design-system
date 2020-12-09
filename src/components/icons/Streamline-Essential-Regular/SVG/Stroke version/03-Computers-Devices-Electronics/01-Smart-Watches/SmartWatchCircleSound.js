import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmartWatchCircleSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smart-watch-circle-sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smart-watch-circle-sound_svg__a"
      d="M4.124 6.969V2.25a1.5 1.5 0 011.5-1.5h6M13.124 17.03v4.72a1.5 1.5 0 01-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-4.719M14.624 3h-1.5a1.5 1.5 0 00-1.5 1.5V6a1.5 1.5 0 001.5 1.5h1.5l3 2.25v-9zM21.422 2.25a6.761 6.761 0 010 6M15.374 12a6.75 6.75 0 11-6.75-6.75"
    />
  );

export default SvgSmartWatchCircleSound;
