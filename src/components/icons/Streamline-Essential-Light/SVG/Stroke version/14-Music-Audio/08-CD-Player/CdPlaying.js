import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPlaying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-playing_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="cd-playing_svg__a"
      d="M12 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="cd-playing_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="cd-playing_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="cd-playing_svg__a"
      d="M3.868 3.868a11.467 11.467 0 00-2.379 3.488l7.317 3.233a3.38 3.38 0 011.783-1.783L7.356 1.489a11.467 11.467 0 00-3.488 2.379zM20.132 20.132a11.467 11.467 0 002.379-3.488l-7.317-3.233a3.38 3.38 0 01-1.783 1.783l3.233 7.317a11.467 11.467 0 003.488-2.379z"
    />
  );

export default SvgCdPlaying;
