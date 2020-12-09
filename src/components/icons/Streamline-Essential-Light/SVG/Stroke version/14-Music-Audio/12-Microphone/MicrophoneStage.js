import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMicrophoneStage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".microphone-stage_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="microphone-stage_svg__a" cx={11.06} cy={9} r={3} />,
    <path
      className="microphone-stage_svg__a"
      d="M14.03 9.53l4.53 4.531a1.414 1.414 0 01-2 2l-4.3-4.311M8.939 11.121l4.242-4.241M15 14.5v6M13.5 20.5h3"
    />,
    <ellipse
      className="microphone-stage_svg__a"
      cx={14.5}
      cy={21}
      rx={7.5}
      ry={2.5}
    />,
    <path
      className="microphone-stage_svg__a"
      d="M11.439 14l-3.797 5.987M22 21L20.141 1.947a.5.5 0 00-.92-.219L15.561 7.5M4.5 2.5A2.231 2.231 0 007 5c-1.615-.006-2.418.86-2.5 2.5A2.211 2.211 0 002 5a2.232 2.232 0 002.5-2.5zM14 .5A2.231 2.231 0 0016.5 3c-1.615-.006-2.418.86-2.5 2.5A2.211 2.211 0 0011.5 3 2.232 2.232 0 0014 .5z"
    />
  );

export default SvgMicrophoneStage;
