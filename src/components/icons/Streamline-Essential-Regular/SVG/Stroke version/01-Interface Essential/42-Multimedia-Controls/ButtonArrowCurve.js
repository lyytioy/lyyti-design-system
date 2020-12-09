import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonArrowCurve = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-arrow-curve_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-arrow-curve_svg__a"
      d="M3.75 11.248V15a8.25 8.25 0 0016.5 0V.748"
    />,
    <path
      className="button-arrow-curve_svg__a"
      d="M23.25 3.748l-3-3-3 3M6.75 14.248l-3-3-3 3"
    />
  );

export default SvgButtonArrowCurve;
