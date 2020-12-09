import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFocusCross = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".focus-cross_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="focus-cross_svg__a"
      d="M.5 18.531V20.5a1 1 0 001 1h1.969M3.469 2.5H1.5a1 1 0 00-1 1v1.969M23.5 5.469V3.5a1 1 0 00-1-1h-1.969M20.531 21.5H22.5a1 1 0 001-1v-1.969"
    />,
    <rect
      className="focus-cross_svg__a"
      x={10.5}
      y={3.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="focus-cross_svg__a"
      x={10.5}
      y={17.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="focus-cross_svg__a"
      x={10.5}
      y={10.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="focus-cross_svg__a"
      x={19.5}
      y={10.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <rect
      className="focus-cross_svg__a"
      x={1.5}
      y={10.5}
      width={3}
      height={3}
      rx={0.5}
      ry={0.5}
    />,
    <path
      className="focus-cross_svg__a"
      d="M23.5 5.5v-2a1 1 0 00-1-1h-2M23.5 18.5v2a1 1 0 01-1 1h-2M.5 5.5v-2a1 1 0 011-1h2M.5 18.5v2a1 1 0 001 1h2"
    />
  );

export default SvgFocusCross;
