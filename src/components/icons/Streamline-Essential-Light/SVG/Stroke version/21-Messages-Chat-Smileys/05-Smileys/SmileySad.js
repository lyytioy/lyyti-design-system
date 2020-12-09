import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-sad_svg__a"
      d="M7.5 19a4.5 4.5 0 019 0M14.5 9.392a2.359 2.359 0 004 0"
    />,
    <circle className="smiley-sad_svg__a" cx={12} cy={12} r={11.5} />,
    <path className="smiley-sad_svg__a" d="M9.5 9.392a2.359 2.359 0 01-4 0" />
  );

export default SvgSmileySad;
