import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCableSplit1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cable-split-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cable-split-1_svg__a" cx={12} cy={11.5} r={3} />,
    <path
      className="cable-split-1_svg__a"
      d="M17.5 6l5-5M5 1L1.5 4.5M8 4L4.5 7.5M9.5 19h5M9.5 23h5"
    />
  );

export default SvgCableSplit1;
