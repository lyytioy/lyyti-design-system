import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShout = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shout_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-shout_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-shout_svg__a"
      d="M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 10.25a.25.25 0 10-.25-.25.25.25 0 00.25.25M8.5 7.5a2.5 2.5 0 00-4 0M15.5 7.5a2.5 2.5 0 014 0M12 14.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 003 0v-3a1.5 1.5 0 00-1.5-1.5zM10.5 12.5h.5M13 12.5h.5"
    />
  );

export default SvgSmileyShout;
