import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhp = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".php_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="php_svg__a"
      x={0.5}
      y={5.004}
      width={23}
      height={14}
      rx={1}
      ry={1}
    />,
    <path
      className="php_svg__a"
      d="M8.5 10.5A1.5 1.5 0 017 12H5.5V9H7a1.5 1.5 0 011.5 1.5zM5.5 15.004v-3M18.5 10.5A1.5 1.5 0 0117 12h-1.5V9H17a1.5 1.5 0 011.5 1.5zM15.5 15.004v-3M13.5 9.004v6M10.5 15.004v-6M10.5 12.004h3"
    />
  );

export default SvgPhp;
