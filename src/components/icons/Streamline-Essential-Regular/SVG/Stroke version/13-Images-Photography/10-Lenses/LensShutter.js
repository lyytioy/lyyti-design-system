import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShutter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shutter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="lens-shutter_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="lens-shutter_svg__a"
      d="M22.313 7.5H9.402M13.26.818L6.804 12M2.946 5.318L9.402 16.5M1.687 16.5h12.911M10.74 23.182L17.196 12M21.054 18.682L14.598 7.5"
    />
  );

export default SvgLensShutter;
