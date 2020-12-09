import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTongueSticking = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-tongue-sticking_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="smiley-tongue-sticking_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="smiley-tongue-sticking_svg__a"
      d="M6.75 15.75h10.5M6.75 7.5H9M6.75 10.5H9M15 7.5h2.25M15 10.5h2.25M12.75 15.75V18a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5v-2.25"
    />,
    <circle
      className="smiley-tongue-sticking_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="smiley-tongue-sticking_svg__a"
      d="M6.75 15.75h10.5M6.75 7.5H9M6.75 10.5H9M15 7.5h2.25M15 10.5h2.25M12.75 15.75V18a1.5 1.5 0 001.5 1.5 1.5 1.5 0 001.5-1.5v-2.25"
    />
  );

export default SvgSmileyTongueSticking;
