import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="lens-circle_svg__a" cx={15.75} cy={15.75} r={7.5} />,
    <circle className="lens-circle_svg__a" cx={15.75} cy={15.75} r={4.5} />,
    <path
      className="lens-circle_svg__a"
      d="M8.087 23.25a7.337 7.337 0 010-14.674M18.75 3h4.5M21 .75v4.5M9.065 4.5H12M10.5 3v2.935"
    />
  );

export default SvgLensCircle;
