import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceIdSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-id-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="voice-id-smartphone_svg__a"
      d="M14.25 14.25v6a3 3 0 01-3 3h-7.5a3 3 0 01-3-3V3.75a3 3 0 013-3h7.5M.75 18.745h13.5M17.25 2.25v10.5M14.25 4.5v6M20.25 4.5v6M11.25 6v3M23.25 6v3"
    />
  );

export default SvgVoiceIdSmartphone;
