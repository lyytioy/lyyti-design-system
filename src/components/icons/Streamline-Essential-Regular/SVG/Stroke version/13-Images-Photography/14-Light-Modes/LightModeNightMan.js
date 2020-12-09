import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeNightMan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-night-man_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-night-man_svg__a"
      d="M12.771 23.25a6.044 6.044 0 00-12 0"
    />,
    <circle
      className="light-mode-night-man_svg__a"
      cx={6.771}
      cy={13.125}
      r={3.375}
    />,
    <path
      className="light-mode-night-man_svg__a"
      d="M18.119 1.963A4.833 4.833 0 0119 4.411a4.949 4.949 0 01-2.508 4.618 4.652 4.652 0 01-1.631.56.749.749 0 00-.269 1.378A5.613 5.613 0 1018.9.773a.754.754 0 00-.781 1.19z"
    />
  );

export default SvgLightModeNightMan;
