import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationRightCircle2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-right-circle-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="navigation-right-circle-2_svg__a"
      cx={12}
      cy={11.998}
      r={11}
    />,
    <path
      className="navigation-right-circle-2_svg__a"
      d="M14 8H8.5c-3 0-4 2.792-4 5A7 7 0 006 17v-2.5c0-1 .5-1.5 2.5-1.5H14v1.707a.5.5 0 00.87.336l3.824-4.207a.5.5 0 000-.673L14.87 5.954a.5.5 0 00-.87.336z"
    />
  );

export default SvgNavigationRightCircle2;
