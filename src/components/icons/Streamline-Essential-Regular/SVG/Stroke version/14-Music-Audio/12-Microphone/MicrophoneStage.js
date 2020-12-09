import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneStage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-stage_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="microphone-stage_svg__a"
      d="M2.25 9.75v3M.75 11.25h3M5.25.75v3M3.75 2.25h3"
    />,
    <circle className="microphone-stage_svg__a" cx={10.5} cy={9} r={3.75} />,
    <path
      className="microphone-stage_svg__a"
      d="M7.848 11.652l5.304-5.304M14.213 9.531l4.772 4.769a2.319 2.319 0 01.094 3.276 2.319 2.319 0 01-3.276-.094l-4.772-4.772M12.75 14.432v8.818M10.5 23.25H15M16.568 5.741L21.75.75l1.5 21.669M.881 22.074l5.135-6.173"
    />,
    <path
      className="microphone-stage_svg__a"
      d="M22.449 23.25c.512-.257.8-.537.8-.831 0-1.243-5.037-2.25-11.25-2.25S.75 21.176.75 22.419c0 .293.286.574.8.831"
    />
  );

export default SvgMicrophoneStage;
