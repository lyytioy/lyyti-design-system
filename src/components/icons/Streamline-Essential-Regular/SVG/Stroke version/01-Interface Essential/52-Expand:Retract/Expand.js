import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand_svg__a"
      d="M.75 9.748v-4.5a1.5 1.5 0 011.5-1.5h6M23.25 9.748v-4.5a1.5 1.5 0 00-1.5-1.5h-6M.75 14.248v4.5a1.5 1.5 0 001.5 1.5h6M23.25 14.248v4.5a1.5 1.5 0 01-1.5 1.5h-6"
    />,
    <rect
      className="expand_svg__a"
      x={5.25}
      y={8.248}
      width={13.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgExpand;
