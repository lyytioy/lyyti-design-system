import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdUser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-user_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-user_svg__a"
      d="M.5 17.507v-15M2.5 6.5v7.007M4.5 5.5v9.007M6.5 4.5v11.007M8.5 3.5v13.007M20.5 10.809V2.507M18.5 6.5v3.998M16.5 5.5v5.017M14.5 4.5v8M12.5 3.5v13.007M10.5.507v19M14.5 23.5a4.5 4.5 0 019 0zM16.638 13.862a4.571 4.571 0 005.075 1.021"
    />,
    <circle className="voice-id-user_svg__a" cx={19} cy={15.25} r={2.75} />
  );

export default SvgVoiceIdUser;
