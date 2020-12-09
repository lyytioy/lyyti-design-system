import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdPartition = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".cd-partition_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="cd-partition_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="cd-partition_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="cd-partition_svg__a"
      d="M12.5 8.536L13.644.618M14.475 14.475l5.656 5.657M9.668 9.39L4.339 3.424M8.503 12.154l-7.992.353"
    />
  );

export default SvgCdPartition;
