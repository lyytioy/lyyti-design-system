import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonArrowCurve = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-arrow-curve_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="button-arrow-curve_svg__a"
      d="M4.5 11v4a7.5 7.5 0 0015 0V2"
    />,
    <path
      className="button-arrow-curve_svg__a"
      d="M1 14.499l3.5-3.5 3.5 3.5M16 5.499l3.5-3.5 3.5 3.5"
    />
  );

export default SvgButtonArrowCurve;
