import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoodHappySmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mood-happy-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="mood-happy-smartphone_svg__a"
      d="M18 .75a5.226 5.226 0 00-3.937 8.69l-.657 3.779 3.423-2.111A5.246 5.246 0 1018 .75z"
    />,
    <circle
      className="mood-happy-smartphone_svg__a"
      cx={8.232}
      cy={15.375}
      r={3.375}
    />,
    <path
      className="mood-happy-smartphone_svg__a"
      d="M13.46 23.243A6.062 6.062 0 003 23.25M18 14.25v9M.75 23.25V3.75a3 3 0 013-3h7.5M.75 6.75h9M6.75 3.75h3M20.25 5.571A2.107 2.107 0 0118 7.5a2.107 2.107 0 01-2.25-1.929"
    />
  );

export default SvgMoodHappySmartphone;
