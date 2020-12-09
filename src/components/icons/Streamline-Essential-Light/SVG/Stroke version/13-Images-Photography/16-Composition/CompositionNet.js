import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionNet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-net_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="composition-net_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path className="composition-net_svg__a" d="M17 1L7 23M23 17L1 7" />
  );

export default SvgCompositionNet;
