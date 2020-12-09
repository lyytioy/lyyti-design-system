import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsPlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-player_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-player_svg__cls-1"
      d="M9.5 16.5h-9c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v1"
    />,
    <rect
      className="single-man-actions-player_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-man-actions-player_svg__cls-1"
      d="M15.5 17.5v-1.82a.43.43 0 01.651-.369l3.034 1.82a.43.43 0 010 .738l-3.034 1.82a.43.43 0 01-.651-.369z"
    />
  );

export default SvgSingleManActionsPlayer;
