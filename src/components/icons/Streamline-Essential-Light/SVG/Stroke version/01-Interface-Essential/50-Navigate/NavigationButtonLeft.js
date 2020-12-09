import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNavigationButtonLeft = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".navigation-button-left_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="navigation-button-left_svg__a"
      x={0.5}
      y={5.998}
      width={12}
      height={12}
      rx={1}
      ry={1}
      transform="rotate(180 6.5 11.998)"
    />,
    <path
      className="navigation-button-left_svg__a"
      d="M10 11.998H3.5M5.5 13.998l-2-2 2-2M17 11.998h6.5M21.5 9.998l2 2-2 2"
    />
  );

export default SvgNavigationButtonLeft;
