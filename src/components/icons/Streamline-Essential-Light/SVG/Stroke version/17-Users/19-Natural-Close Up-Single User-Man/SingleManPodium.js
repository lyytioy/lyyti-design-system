import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManPodium = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-podium_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-podium_svg__cls-1"
      d="M21 16.5l-1.5 7M4.5 23.5l-1.5-7M1 16.5h22M4.415 14.507a2.006 2.006 0 011.194-2.125L10 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882a2.006 2.006 0 011.2 2.09"
    />
  );

export default SvgSingleManPodium;
