import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHeadSick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-head-sick_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-head-sick_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-head-sick_svg__a"
      d="M16.5 10.5a.375.375 0 11-.375.375.375.375 0 01.375-.375M18.048 18a6.752 6.752 0 00-12.1 0M7.5 10.5a.375.375 0 10.375.375.375.375 0 00-.375-.375M21.952 6.75H2.048M19.649 3.75H4.352M.75 12l7.5-5.25"
    />
  );

export default SvgSmileyHeadSick;
