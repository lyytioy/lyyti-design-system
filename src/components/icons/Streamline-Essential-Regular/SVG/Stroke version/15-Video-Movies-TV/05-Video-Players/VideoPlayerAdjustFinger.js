import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerAdjustFinger = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-adjust-finger_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="video-player-adjust-finger_svg__a"
      d="M9.065 18H2.217A1.5 1.5 0 01.75 16.476V2.274A1.5 1.5 0 012.217.751h19.566a1.5 1.5 0 011.467 1.523v14.2M20.25 14.249h-1.5M3.75 14.249H9M5.25 13.468v1.5"
    />,
    <path
      className="video-player-adjust-finger_svg__a"
      d="M9 6.749V4.322a.581.581 0 01.273-.5.508.508 0 01.541.008l4.925 2.426a.593.593 0 010 .983L9.814 9.667a.508.508 0 01-.541.007A.578.578 0 019 9.176zM21.636 23.249l.1-1.122a3 3 0 00-2.337-3.2l-3.651-.812v-5.741a1.875 1.875 0 00-3.75 0v9.205l-1.477-1.108a1.533 1.533 0 00-2.146 2.145l.475.633"
    />
  );

export default SvgVideoPlayerAdjustFinger;
