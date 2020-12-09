import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerInterface = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-player-interface_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="video-player-interface_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="video-player-interface_svg__a"
      d="M.75 16.5H6M19.5 16.5h3.75M10.238 20.16A.856.856 0 019 19.394v-5.788a.856.856 0 011.238-.766l5.789 2.895a.855.855 0 010 1.53z"
    />
  );

export default SvgVideoPlayerInterface;
