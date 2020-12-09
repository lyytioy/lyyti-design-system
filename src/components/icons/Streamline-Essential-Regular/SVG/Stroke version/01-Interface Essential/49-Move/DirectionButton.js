import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="direction-button_svg__a"
      d="M7.5 4.808l3.75-3.75a1.061 1.061 0 011.5 0l3.75 3.75M4.811 16.5l-3.75-3.75a1.059 1.059 0 010-1.5l3.75-3.75M16.5 19.187l-3.75 3.75a1.061 1.061 0 01-1.5 0l-3.75-3.75M19.189 7.5l3.75 3.75a1.061 1.061 0 010 1.5l-3.75 3.75"
    />,
    <circle className="direction-button_svg__a" cx={12} cy={11.998} r={3} />
  );

export default SvgDirectionButton;
