import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScrollHorizontal1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".scroll-horizontal-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="scroll-horizontal-1_svg__a" cx={12} cy={12.088} r={3} />,
    <path
      className="scroll-horizontal-1_svg__a"
      d="M1.026 11.459a.854.854 0 000 1.257l3.118 2.858a.66.66 0 001.106-.486v-6A.66.66 0 004.144 8.6zM22.973 12.716a.852.852 0 000-1.257L19.856 8.6a.66.66 0 00-1.106.487v6a.659.659 0 001.105.486z"
    />
  );

export default SvgScrollHorizontal1;
