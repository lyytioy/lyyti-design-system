import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCompositionNet = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".composition-net_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="composition-net_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={1}
      ry={1}
    />,
    <path
      className="composition-net_svg__a"
      d="M17.114.75L6.886 23.25M23.25 17.114L.75 6.886"
    />
  );

export default SvgCompositionNet;
