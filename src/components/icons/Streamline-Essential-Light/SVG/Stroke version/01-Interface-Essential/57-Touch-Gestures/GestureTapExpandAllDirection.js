import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGestureTapExpandAllDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gesture-tap-expand-all-direction_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gesture-tap-expand-all-direction_svg__a"
      d="M11.502.501v4M9.002 2.501l2.5-2 2.5 2M11.502 23.501v-4M9.002 21.501l2.5 2 2.5-2M.502 11.501h3M2.502 14.001l-2-2.5 2-2.5M23.502 11.501h-3M21.502 14.001l2-2.5-2-2.5M6.489 16.447a6.5 6.5 0 1111.016.013"
    />,
    <path
      className="gesture-tap-expand-all-direction_svg__a"
      d="M10.5 9.5a1 1 0 112 0v2c2.607 1.184 3.76 1.421 3.467 2.69-.131.566-.8 2.753-.967 3.31h-4l-2.5-3c-1-1.5 1-2 2-.48z"
    />
  );

export default SvgGestureTapExpandAllDirection;
