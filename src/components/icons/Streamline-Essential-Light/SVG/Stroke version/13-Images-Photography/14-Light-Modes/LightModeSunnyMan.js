import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeSunnyMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-sunny-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-sunny-man_svg__a"
      d="M17.5.5v1M21.743 2.257l-.707.707M23.5 6.5h-1M21.743 10.743l-.707-.707M17.5 12.5v-1M13.257 10.743l.707-.707M11.5 6.5h1M13.257 2.257l.707.707"
    />,
    <circle className="light-mode-sunny-man_svg__a" cx={17.5} cy={6.5} r={3} />,
    <path
      className="light-mode-sunny-man_svg__a"
      d="M11.5 23.5a5.5 5.5 0 10-11 0zM3.153 11.61a5.4 5.4 0 006 1.206"
    />,
    <circle
      className="light-mode-sunny-man_svg__a"
      cx={5.944}
      cy={13.25}
      r={3.25}
    />
  );

export default SvgLightModeSunnyMan;
