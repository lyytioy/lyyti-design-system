import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyMad1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-mad-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-mad-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-mad-1_svg__a"
      d="M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 10.25a.25.25 0 10-.25-.25.25.25 0 00.25.25M12 14.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 003 0v-2a1.5 1.5 0 00-1.5-1.5zM8.5 7.5a2.5 2.5 0 00-4 0M15.5 7.5a2.5 2.5 0 014 0"
    />
  );

export default SvgSmileyMad1;
