import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCsv1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".csv-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="csv-1_svg__a"
      x={0.752}
      y={0.753}
      width={22.5}
      height={22.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="csv-1_svg__a"
      d="M7.547 10.5a3 3 0 00-3 3V15a3 3 0 003 3M13.547 10.5h-1.5a1.5 1.5 0 00-1.5 1.5c0 2.25 3 2.25 3 4.5a1.5 1.5 0 01-1.5 1.5h-1.5M16.547 10.5v2.545a8.935 8.935 0 001.5 4.955 8.935 8.935 0 001.5-4.955V10.5"
    />
  );

export default SvgCsv1;
