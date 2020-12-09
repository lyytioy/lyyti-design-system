import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonPlay = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-play_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="button-play_svg__a" cx={12} cy={11.998} r={11.25} />,
    <path
      className="button-play_svg__a"
      d="M9 15.613a1.636 1.636 0 002.712 1.231L17.25 12l-5.538-4.847A1.635 1.635 0 009 8.384z"
    />
  );

export default SvgButtonPlay;
