import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsMusic = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-music_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={13.5}
      cy={21.5}
      r={2}
    />,
    <circle
      className="single-man-actions-music_svg__cls-1"
      cx={21.5}
      cy={19.5}
      r={2}
    />,
    <path
      className="single-man-actions-music_svg__cls-1"
      d="M23.5 19.5v-6.795a1 1 0 00-1.184-.983l-6 1.125a1 1 0 00-.816.983v7.67M12.5 16.5H.5c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l3 1.286"
    />
  );

export default SvgSingleManActionsMusic;
