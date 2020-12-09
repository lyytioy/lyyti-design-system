import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgYm1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ym-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="ym-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="ym-1_svg__a"
      d="M10.5 11.431v2a2 2 0 01-4 0v-2M8.5 15.431v4M12.5 19.431v-8l2 4 2-4v8"
    />
  );

export default SvgYm1;
