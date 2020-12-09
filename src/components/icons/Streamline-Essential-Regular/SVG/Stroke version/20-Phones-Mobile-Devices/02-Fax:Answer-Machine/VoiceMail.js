import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="voice-mail_svg__a" cx={5.25} cy={12} r={4.5} />,
    <circle className="voice-mail_svg__a" cx={18.75} cy={12} r={4.5} />,
    <path className="voice-mail_svg__a" d="M5.25 16.5h13.5" />
  );

export default SvgVoiceMail;
