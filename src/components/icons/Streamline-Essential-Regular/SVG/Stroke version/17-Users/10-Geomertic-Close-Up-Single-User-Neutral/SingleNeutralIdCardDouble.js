import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralIdCardDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-id-card-double_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-id-card-double_svg__cls-1"
      cx={8.25}
      cy={10.875}
      r={2.625}
    />,
    <path
      className="single-neutral-id-card-double_svg__cls-1"
      d="M3.75 18.75a4.5 4.5 0 019 0zM14.25 11.25h4.5M14.25 14.25h6"
    />,
    <path
      className="single-neutral-id-card-double_svg__cls-1"
      d="M21.75 5.25H2.25a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h3a1.5 1.5 0 013 0h7.5a1.5 1.5 0 013 0h3a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5zM23.25 2.25a1.5 1.5 0 00-1.5-1.5H2.25a1.5 1.5 0 00-1.5 1.5"
    />
  );

export default SvgSingleNeutralIdCardDouble;
