import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="button-play_svg__a" cx={12.04} cy={11.999} r={11.5} />,
    <path
      className="button-play_svg__a"
      d="M9.434 8.446A.569.569 0 008.54 9v7a.569.569 0 00.894.553l7.212-3.606c.491-.246.491-.648 0-.894z"
    />
  );

export default SvgButtonPlay;
