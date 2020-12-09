import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="voice-id-denied_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="voice-id-denied_svg__a"
      d="M19.621 15.379l-4.242 4.243M19.621 19.622l-4.242-4.243M.5 17.5v-15M2.5 6.5v7M4.5 5.5v9M6.5 4.5v11M8.5 3.5v13M20.5 10V2.5M18.5 6.5v3M16.5 5.5v4M14.5 4.5V10M12.5 3.5V11M10.5.5v13"
    />
  );

export default SvgVoiceIdDenied;
