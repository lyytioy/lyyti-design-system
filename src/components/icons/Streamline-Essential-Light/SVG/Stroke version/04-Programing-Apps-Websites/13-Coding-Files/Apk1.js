import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgApk1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".apk-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="apk-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="apk-1_svg__a"
      d="M3.5 19.5v-6a2 2 0 114 0v6M3.5 15.504h4M13.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM9.5 19.504v-4M19.5 11.504l-4 4 4 4M15.5 19.504v-8"
    />
  );

export default SvgApk1;
