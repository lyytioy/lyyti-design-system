import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLookOneEye = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-look-one-eye_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="smiley-look-one-eye_svg__a"
      d="M15.75 10.125a.375.375 0 10.375.375.375.375 0 00-.375-.375"
    />,
    <circle
      className="smiley-look-one-eye_svg__a"
      cx={15.75}
      cy={10.5}
      r={3}
    />,
    <circle className="smiley-look-one-eye_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-look-one-eye_svg__a"
      d="M9.75 18h4.5M6.75 11.25H9M14.25 5.3a1.8 1.8 0 013 0M5.25 8.25a1.5 1.5 0 011.227-.75c.818 0 1.227.75 2.046.75A1.5 1.5 0 009.75 7.5"
    />
  );

export default SvgSmileyLookOneEye;
