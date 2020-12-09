import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLookOneEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-look-one-eye_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="smiley-look-one-eye_svg__a" d="M8.5 15.5h7" />,
    <circle className="smiley-look-one-eye_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-look-one-eye_svg__a"
      d="M4.5 8.5a1.85 1.85 0 011.5-1c1 0 1.5 1 2.5 1a1.85 1.85 0 001.5-1"
    />,
    <circle className="smiley-look-one-eye_svg__a" cx={17} cy={10} r={2.5} />,
    <path
      className="smiley-look-one-eye_svg__a"
      d="M17 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M19 5.5a2.5 2.5 0 00-4 0M5.5 11.5h3"
    />
  );

export default SvgSmileyLookOneEye;
