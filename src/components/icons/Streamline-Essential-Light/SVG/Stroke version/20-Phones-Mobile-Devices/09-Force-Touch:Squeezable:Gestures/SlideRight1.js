import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSlideRight1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".slide-right-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="slide-right-1_svg__a"
      d="M10.5 15.5V20a2 2 0 01-2 2h-6a2 2 0 01-2-2V4a2 2 0 012-2h6a2 2 0 012 2v4.5M10.5 18H.5"
    />,
    <path
      className="slide-right-1_svg__a"
      d="M5.5 19.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M6.5 12H17M14 15.015l3-3-3-3"
    />,
    <circle className="slide-right-1_svg__a" cx={21.5} cy={12} r={2} />
  );

export default SvgSlideRight1;
