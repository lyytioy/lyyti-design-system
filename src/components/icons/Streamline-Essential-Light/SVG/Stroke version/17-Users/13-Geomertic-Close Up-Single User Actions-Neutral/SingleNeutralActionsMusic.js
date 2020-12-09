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
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67"
    />,
    <circle
      className="single-neutral-actions-music_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-music_svg__cls-1"
      d="M12.5 12.6a7 7 0 00-12 4.9h12"
    />
  );

export default SvgSingleNeutralActionsMusic;
