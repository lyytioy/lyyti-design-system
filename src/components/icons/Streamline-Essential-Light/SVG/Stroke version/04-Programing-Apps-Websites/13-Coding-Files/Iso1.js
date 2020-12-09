import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIso1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iso-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="iso-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="iso-1_svg__a"
      d="M6 11.504v8M4 19.504h4M4 11.504h4M14 11.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.975a1.854 1.854 0 01-.829 3.513H10M20 17.5a2 2 0 11-4 0v-4a2 2 0 114 0z"
    />
  );

export default SvgIso1;
