import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceId = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="voice-id_svg__a"
      d="M8.5 23.5h-7a1 1 0 01-1-1v-7M8.5.5h-7a1 1 0 00-1 1v7M15.5 23.5h7a1 1 0 001-1v-7M15.5.5h7a1 1 0 011 1v7M4.5 10v4M7 9v6M9.5 8v8M19.5 10v4M17 9v6M14.5 8v8M12 5v14"
    />
  );

export default SvgVoiceId;
