import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAlignLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".align-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="align-landscape_svg__a"
      d="M21.5 14V1.5a1 1 0 00-1-1h-17a1 1 0 00-1 1V14M20.501 19.498h-17M7.001 22.998l-3.5-3.5 3.5-3.5"
    />,
    <circle className="align-landscape_svg__a" cx={12.001} cy={6.998} r={2} />,
    <path
      className="align-landscape_svg__a"
      d="M15.5 12.5h-7a3.5 3.5 0 017 0z"
    />
  );

export default SvgAlignLandscape;
