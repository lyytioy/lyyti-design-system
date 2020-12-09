import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAsp1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".asp-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="asp-1_svg__a"
      x={0.5}
      y={0.504}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />,
    <path
      className="asp-1_svg__a"
      d="M4.5 19.5v-6a2 2 0 114 0v6M4.5 15.504h4M14.5 11.5h-2.146a1.854 1.854 0 00-.829 3.512l1.95.975a1.854 1.854 0 01-.829 3.513H10.5M20.5 13.5a2 2 0 01-2 2h-2v-4h2a2 2 0 012 2zM16.5 19.504v-4"
    />
  );

export default SvgAsp1;
