import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeSunnyWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-sunny-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-sunny-woman_svg__a"
      d="M17.5.5v1M21.743 2.257l-.707.707M23.5 6.5h-1M21.743 10.743l-.707-.707M17.5 12.5v-1M13.257 10.743l.707-.707M11.5 6.5h1M13.257 2.257l.707.707"
    />,
    <circle
      className="light-mode-sunny-woman_svg__a"
      cx={17.5}
      cy={6.5}
      r={3}
    />,
    <path
      className="light-mode-sunny-woman_svg__a"
      d="M10.37 16.373a4.724 4.724 0 01-.687-2.617v-1.071a3.683 3.683 0 10-7.366 0v1.071a4.724 4.724 0 01-.687 2.617"
    />,
    <path
      className="light-mode-sunny-woman_svg__a"
      d="M2.317 13.293A4.877 4.877 0 006 11.605a4.877 4.877 0 003.683 1.688M9.246 13.273a3.25 3.25 0 01-6.492 0M11.5 23.5a5.5 5.5 0 10-11 0z"
    />
  );

export default SvgLightModeSunnyWoman;
