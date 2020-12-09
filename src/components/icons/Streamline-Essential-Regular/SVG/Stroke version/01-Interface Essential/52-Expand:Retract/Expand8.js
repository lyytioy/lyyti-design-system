import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand8 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".expand-8_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="expand-8_svg__a"
      d="M.751 8.248v-6a1.5 1.5 0 011.5-1.5h6M23.251 8.248v-6a1.5 1.5 0 00-1.5-1.5h-6M23.251 15.748v6a1.5 1.5 0 01-1.5 1.5h-6"
    />,
    <rect
      className="expand-8_svg__a"
      x={0.751}
      y={11.248}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />
  );

export default SvgExpand8;
