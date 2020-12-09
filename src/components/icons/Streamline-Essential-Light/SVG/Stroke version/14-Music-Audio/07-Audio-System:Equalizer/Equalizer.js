import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEqualizer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".equalizer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="equalizer_svg__a"
      d="M2 2.5a1 1 0 00-1 1v17a1 1 0 002 0v-17a1 1 0 00-1-1zM22 2.5a1 1 0 00-1 1v17a1 1 0 002 0v-17a1 1 0 00-1-1zM3 3.5h18v17H3zM7 10v8M12 10v8M17 10v8M5 15.5h4M10 12.5h4M15 15.5h4M12 6.5h7"
    />,
    <rect
      className="equalizer_svg__a"
      x={5}
      y={5.5}
      width={5}
      height={2}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgEqualizer;
