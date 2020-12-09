import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeaker1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speaker-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="speaker-1_svg__a" cx={12} cy={12} r={7.5} />,
    <circle className="speaker-1_svg__a" cx={12} cy={12} r={2.25} />,
    <path
      className="speaker-1_svg__a"
      d="M21.784 6.459l.587-.588a3 3 0 10-4.242-4.242l-.588.587a11.2 11.2 0 00-11.082 0l-.588-.587a3 3 0 00-4.242 4.242l.587.588a11.2 11.2 0 000 11.082l-.587.588a3 3 0 004.242 4.242l.588-.587a11.2 11.2 0 0011.082 0l.588.587a3 3 0 004.242-4.242l-.587-.588a11.2 11.2 0 000-11.082z"
    />
  );

export default SvgSpeaker1;
