import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWebpageLive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".webpage-live_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="webpage-live_svg__a"
      d="M10 7.542v-5M12 2.542v1.7a5.956 5.956 0 001 3.3 5.956 5.956 0 001-3.3v-1.7M6 2.542v4a1 1 0 001 1h1M18 7.542h-1a1 1 0 01-1-1v-3a1 1 0 011-1h1M16 5.542h2"
    />,
    <rect
      className="webpage-live_svg__a"
      x={3}
      y={0.542}
      width={18}
      height={23}
      rx={1}
      ry={1}
    />,
    <circle className="webpage-live_svg__a" cx={6.5} cy={11.542} r={1} />,
    <path className="webpage-live_svg__a" d="M9.5 10.542H17M9.5 12.542h4" />,
    <circle className="webpage-live_svg__a" cx={6.5} cy={16.542} r={1} />,
    <path
      className="webpage-live_svg__a"
      d="M9.5 15.542H15M9.5 17.542H16M3 20.542h18M18 20.542v3"
    />
  );

export default SvgWebpageLive;
