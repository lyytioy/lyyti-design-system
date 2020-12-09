import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlaying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-playing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cd-playing_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="cd-playing_svg__a"
      d="M10.474 8.58L7.42 1.734M1.701 7.493l6.868 3.005M22.298 16.507l-6.867-3.006M13.526 15.42l3.054 6.846"
    />,
    <circle className="cd-playing_svg__a" cx={12} cy={12} r={3.75} />
  );

export default SvgCdPlaying;
