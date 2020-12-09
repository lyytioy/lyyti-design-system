import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".volume-down_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="volume-down_svg__a" cx={12} cy={4.501} r={3} />,
    <circle className="volume-down_svg__a" cx={12} cy={4.501} r={1} />,
    <path
      className="volume-down_svg__a"
      d="M16.736 5.974a7.5 7.5 0 11-9.473 0M20.947 6.5A10.5 10.5 0 113.382 6"
    />,
    <path className="volume-down_svg__a" d="M20.5 9.001v-2.5H23" />
  );

export default SvgVolumeDown;
