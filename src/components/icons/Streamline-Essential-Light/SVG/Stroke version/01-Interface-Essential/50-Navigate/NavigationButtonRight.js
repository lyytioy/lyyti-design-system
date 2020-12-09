import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationButtonRight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-button-right_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="navigation-button-right_svg__a"
      x={11.5}
      y={5.998}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="navigation-button-right_svg__a"
      d="M14 11.998h6.5M18.5 9.998l2 2-2 2M7 11.998H.5M2.5 13.998l-2-2 2-2"
    />
  );

export default SvgNavigationButtonRight;
