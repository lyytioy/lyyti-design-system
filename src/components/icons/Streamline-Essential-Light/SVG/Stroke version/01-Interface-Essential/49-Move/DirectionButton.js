import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="direction-button_svg__a" cx={12} cy={11.998} r={2} />,
    <path
      className="direction-button_svg__a"
      d="M19 7.5l3.793 3.793a1 1 0 010 1.414L19 16.5M5 16.5l-3.793-3.795a1 1 0 010-1.414L5 7.5M7.5 5l3.793-3.793a1 1 0 011.414 0L16.5 5M7.5 19l3.793 3.793a1 1 0 001.414 0L16.5 19"
    />
  );

export default SvgDirectionButton;
