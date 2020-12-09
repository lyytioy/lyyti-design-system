import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebcam1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webcam-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="webcam-1_svg__a"
      d="M6.75 21.368h10.5M9.938 14.618l-1.688 6.75M14.063 14.618l1.687 6.75M23.25 8.618a6 6 0 01-6 6H6.75a6 6 0 010-12h10.5a6 6 0 016 6z"
    />,
    <circle className="webcam-1_svg__a" cx={12} cy={8.618} r={3} />
  );

export default SvgWebcam1;
