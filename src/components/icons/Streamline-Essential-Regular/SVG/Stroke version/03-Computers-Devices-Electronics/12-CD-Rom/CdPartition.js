import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPartition = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-partition_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="cd-partition_svg__a" cx={12} cy={12} r={11.25} />,
    <circle className="cd-partition_svg__a" cx={12} cy={12} r={3.75} />,
    <path
      className="cd-partition_svg__a"
      d="M14.069 8.887L18.756 3M10.5 8.563L8.496 1.31M15 14.25l5.321 5.321M13.337 15.503L15 22.842"
    />
  );

export default SvgCdPartition;
