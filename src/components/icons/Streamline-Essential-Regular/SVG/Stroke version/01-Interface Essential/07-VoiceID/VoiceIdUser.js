import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-user_svg__a"
      d="M.75.75v13.5M9.75.75v13.5M12.75.75v9M21.75.75v9M3.75 5.25v4.5M18.75 5.25V7.5M6.75 3.75v7.5M15.75 3.75v4.5"
    />,
    <circle className="voice-id-user_svg__a" cx={18} cy={13.125} r={2.625} />,
    <path
      className="voice-id-user_svg__a"
      d="M18 16.5a5.25 5.25 0 00-5.25 5.25v1.5h10.5v-1.5A5.249 5.249 0 0018 16.5z"
    />
  );

export default SvgVoiceIdUser;
