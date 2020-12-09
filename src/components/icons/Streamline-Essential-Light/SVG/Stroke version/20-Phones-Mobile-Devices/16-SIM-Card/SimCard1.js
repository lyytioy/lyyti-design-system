import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSimCard1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sim-card-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="sim-card-1_svg__a"
      d="M20.5 22.5a1 1 0 01-1 1h-15a1 1 0 01-1-1v-21a1 1 0 011-1h10.086a1 1 0 01.707.293l4.914 4.914a1 1 0 01.293.707z"
    />,
    <rect
      className="sim-card-1_svg__a"
      x={6.5}
      y={10.5}
      width={11}
      height={10}
      rx={1}
      ry={1}
    />,
    <path className="sim-card-1_svg__a" d="M6.5 16.5h3.768M6.5 14.5h3.768" />,
    <circle className="sim-card-1_svg__a" cx={12} cy={15.5} r={2} />,
    <path
      className="sim-card-1_svg__a"
      d="M12 10.5v3M12 17.5v3M13.732 16.5H17.5M13.732 14.5H17.5"
    />
  );

export default SvgSimCard1;
