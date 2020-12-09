import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModernTv8K = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".modern-tv-8k_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="modern-tv-8k_svg__a"
      x={0.5}
      y={2}
      width={23}
      height={17}
      rx={1}
      ry={1}
    />,
    <path
      className="modern-tv-8k_svg__a"
      d="M10.5 19h3v3h-3zM7 22h10M17.5 7l-4 4 4 4M13.5 15V7"
    />,
    <circle className="modern-tv-8k_svg__a" cx={8} cy={12.5} r={2.5} />,
    <circle className="modern-tv-8k_svg__a" cx={8} cy={8.5} r={1.5} />
  );

export default SvgModernTv8K;
