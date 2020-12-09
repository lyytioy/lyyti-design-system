import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCsv = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".csv_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="csv_svg__a"
      x={0.531}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="csv_svg__a"
      d="M8.531 15a3 3 0 010-6M13.531 9h-1.7a1.3 1.3 0 00-.723 2.386l1.84 1.227a1.3 1.3 0 01-.72 2.387h-1.7M18.531 9v1.5a7.5 7.5 0 01-1.5 4.5 7.5 7.5 0 01-1.5-4.5V9"
    />
  );

export default SvgCsv;
