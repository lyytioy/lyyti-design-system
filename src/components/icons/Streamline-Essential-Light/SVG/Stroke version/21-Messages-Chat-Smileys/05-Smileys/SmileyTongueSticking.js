import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTongueSticking = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-tongue-sticking_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="smiley-tongue-sticking_svg__a"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="smiley-tongue-sticking_svg__a"
      d="M7.5 15.5h9M12.5 15.5v3a1.5 1.5 0 003 0v-3M5.5 7.5h3M5.5 9.5h3M18.5 7.5h-3M18.5 9.5h-3"
    />
  );

export default SvgSmileyTongueSticking;
