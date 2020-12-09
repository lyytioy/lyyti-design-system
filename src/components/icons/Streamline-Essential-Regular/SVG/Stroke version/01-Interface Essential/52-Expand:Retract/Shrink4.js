import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShrink4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".shrink-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="shrink-4_svg__a"
      d="M23.25.748l-6 6M6.75 23.248v-6h-6M17.25.748v6h6M6.75 17.248l-6 6M.75.748l6 6M17.25 23.248v-6h6M6.75.748v6h-6M17.25 17.248l6 6"
    />,
    <rect
      className="shrink-4_svg__a"
      x={8.25}
      y={8.248}
      width={7.5}
      height={7.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgShrink4;
