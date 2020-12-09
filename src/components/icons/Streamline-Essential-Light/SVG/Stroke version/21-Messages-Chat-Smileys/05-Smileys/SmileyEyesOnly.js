import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyEyesOnly = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-eyes-only_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-eyes-only_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />,
    <circle className="smiley-eyes-only_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSmileyEyesOnly;
