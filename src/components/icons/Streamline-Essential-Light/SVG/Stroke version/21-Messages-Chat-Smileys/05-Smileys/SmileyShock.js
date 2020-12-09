import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyShock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-shock_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-shock_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-shock_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M12 14.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 003 0v-2a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgSmileyShock;
