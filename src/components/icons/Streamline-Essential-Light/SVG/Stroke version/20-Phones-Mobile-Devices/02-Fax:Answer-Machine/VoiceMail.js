import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVoiceMail = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".voice-mail_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="voice-mail_svg__a" cx={5.5} cy={12} r={5} />,
    <circle className="voice-mail_svg__a" cx={18.5} cy={12} r={5} />,
    <path className="voice-mail_svg__a" d="M18.5 17h-13" />
  );

export default SvgVoiceMail;
