import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircleBold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-circle-bold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="add-circle-bold_svg__a" cx={12} cy={12} r={11} />,
    <path
      className="add-circle-bold_svg__a"
      d="M19 11a1 1 0 00-1-1h-4V6a1 1 0 00-1-1h-2a1 1 0 00-1 1v4H6a1 1 0 00-1 1v2a1 1 0 001 1h4v4a1 1 0 001 1h2a1 1 0 001-1v-4h4a1 1 0 001-1z"
    />
  );

export default SvgAddCircleBold;
