import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-denied_svg__a"
      d="M.75.75v13.5M9.75.75v10.5M12.75.75v9M21.75.75V9M3.75 5.25v4.5M18.75 5.25v3M6.75 3.75v7.5M15.75 3.75v4.5"
    />,
    <circle className="voice-id-denied_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="voice-id-denied_svg__a"
      d="M19.5 14.999l-4.5 4.5M15 14.999l4.5 4.5"
    />
  );

export default SvgVoiceIdDenied;
