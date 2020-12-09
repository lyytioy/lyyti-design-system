import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyNauseous = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-nauseous_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-nauseous_svg__a"
      d="M7.5 6.5a3.564 3.564 0 01-3 1.5M16.5 6.5a3.564 3.564 0 003 1.5M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <circle className="smiley-nauseous_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-nauseous_svg__a"
      d="M15.086 15.278a6.509 6.509 0 00-6.172 0M7.068 13.5a4.5 4.5 0 012.432 4M16.932 13.5a4.5 4.5 0 00-2.432 4"
    />
  );

export default SvgSmileyNauseous;
