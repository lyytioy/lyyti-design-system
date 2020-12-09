import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-expand_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="phone-expand_svg__a"
      x={6.751}
      y={3.75}
      width={10.5}
      height={16.5}
      rx={2.25}
      ry={2.25}
    />,
    <path
      className="phone-expand_svg__a"
      d="M17.251 15.75h-10.5M.751 3.75v-3h3M.751.75l3 3M23.251 3.75v-3h-3M23.251.75l-3 3M.751 20.25v3h3M.751 23.25l3-3M23.251 20.25v3h-3M23.251 23.25l-3-3"
    />
  );

export default SvgPhoneExpand;
