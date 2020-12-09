import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIpodPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ipod-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ipod-play_svg__a"
      d="M10.5 16.18a.43.43 0 01.651-.369l3.034 1.82a.431.431 0 010 .738l-3.034 1.82a.43.43 0 01-.651-.369z"
    />,
    <path
      className="ipod-play_svg__a"
      d="M17.986 23.25H6.014A1.593 1.593 0 014.5 21.589V2.279A1.488 1.488 0 016.028.75H18a1.466 1.466 0 011.5 1.529v19.31a1.593 1.593 0 01-1.514 1.661zM4.5 12.75h15"
    />
  );

export default SvgIpodPlay;
