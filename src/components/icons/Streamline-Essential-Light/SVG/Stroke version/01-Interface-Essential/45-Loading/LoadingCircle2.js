import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoadingCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="loading-circle-2_svg__a" cx={12} cy={11.998} r={11} />,
    <path
      className="loading-circle-2_svg__a"
      d="M19 14.7a7.473 7.473 0 00.5-2.7M16.5 18a7.533 7.533 0 001.5-1.5M9.5 19.071A7.533 7.533 0 0014.7 19M10.507 4.647A7.5 7.5 0 007.5 18"
    />,
    <circle className="loading-circle-2_svg__a" cx={12} cy={4.498} r={1.5} />
  );

export default SvgLoadingCircle2;
