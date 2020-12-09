import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand5 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-5_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-5_svg__a"
      d="M6 17.998l-5.25 5.25M23.25 6.748v-6h-6M.75 17.248v6h6M23.25.748L18 5.998M18 17.998l5.25 5.25M.75 6.748v-6h6M23.25 17.248v6h-6M.75.748L6 5.998"
    />,
    <rect
      className="expand-5_svg__a"
      x={8.25}
      y={8.248}
      width={7.5}
      height={7.5}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgExpand5;
