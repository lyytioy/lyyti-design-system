import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdLock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-lock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-lock_svg__a"
      d="M.75.75v13.5M9.75.75v13.5M12.75.75v10.5M21.75.75V9M3.75 5.25v4.5M18.75 5.25v3M6.75 3.75v7.5M15.75 3.75V9"
    />,
    <rect
      className="voice-id-lock_svg__a"
      x={14.25}
      y={15.75}
      width={9}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="voice-id-lock_svg__a"
      d="M18.75 11.25a3 3 0 00-3 3v1.5h6v-1.5a3 3 0 00-3-3zM18.75 19.154a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgVoiceIdLock;
