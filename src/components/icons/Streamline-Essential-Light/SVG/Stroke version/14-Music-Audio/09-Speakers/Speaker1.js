import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSpeaker1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".speaker-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="speaker-1_svg__a" cx={12} cy={12} r={7.5} />,
    <circle className="speaker-1_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="speaker-1_svg__a"
      d="M21 2.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M21 20.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="speaker-1_svg__a"
      d="M21.7 5.837l1.07-1.069a2.5 2.5 0 00-3.536-3.536L18.163 2.3a11.44 11.44 0 00-12.326 0L4.768 1.232a2.5 2.5 0 00-3.536 3.536L2.3 5.837a11.44 11.44 0 000 12.326l-1.07 1.069a2.5 2.5 0 003.536 3.536L5.837 21.7a11.44 11.44 0 0012.326 0l1.069 1.07a2.5 2.5 0 003.536-3.536L21.7 18.163a11.44 11.44 0 000-12.326z"
    />,
    <path
      className="speaker-1_svg__a"
      d="M3 2.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M3 20.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgSpeaker1;
