import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-actions-music_svg__cls-1"
      cx={13.5}
      cy={21.5}
      r={2}
    />,
    <circle
      className="single-neutral-actions-music_svg__cls-1"
      cx={21.5}
      cy={19.5}
      r={2}
    />,
    <path
      className="single-neutral-actions-music_svg__cls-1"
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67M13.5 16.5H.5a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.34-3.978A3.354 3.354 0 018.5.5a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.413 1.255.464 2.385.864 3.27 1.265"
    />
  );

export default SvgSingleNeutralActionsMusic;
