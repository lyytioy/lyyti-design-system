import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceId = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="voice-id_svg__a"
      d="M23.25 15.75v6a1.5 1.5 0 01-1.5 1.5h-6M15.75.75h6a1.5 1.5 0 011.5 1.5v6M.75 8.25v-6a1.5 1.5 0 011.5-1.5h6M8.25 23.25h-6a1.5 1.5 0 01-1.5-1.5v-6M12 6.75v10.5M8.25 9v6M15.75 9v6M4.5 10.5v3M19.5 10.5v3"
    />
  );

export default SvgVoiceId;
