import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCsv1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".csv-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="csv-1_svg__a"
      x={0.531}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="csv-1_svg__a"
      d="M7.531 19.5a4 4 0 110-8M13.531 11.516h-2.146a1.854 1.854 0 00-.829 3.513l1.95.975a1.854 1.854 0 01-.829 3.512H9.531M19.531 11.5v2.3a9.126 9.126 0 01-2 5.7 9.132 9.132 0 01-2-5.7v-2.3"
    />
  );

export default SvgCsv1;
