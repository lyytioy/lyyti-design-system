import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeNightWoman = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-night-woman_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-night-woman_svg__a"
      d="M12.749 23.25a6.008 6.008 0 00-5.99-5.99 6.008 6.008 0 00-5.99 5.99M2.844 11.822v.92a5.464 5.464 0 01-.793 3.021M10.458 11.822v.92a5.456 5.456 0 00.793 3.021M2.855 12.024a5.068 5.068 0 003.8-1.754 5.066 5.066 0 003.8 1.754"
    />,
    <circle
      className="light-mode-night-woman_svg__a"
      cx={6.651}
      cy={11.719}
      r={3.808}
    />,
    <path
      className="light-mode-night-woman_svg__a"
      d="M18.129 1.961a4.827 4.827 0 01.882 2.444 4.938 4.938 0 01-2.5 4.61 4.656 4.656 0 01-1.628.559.748.748 0 00-.269 1.376A5.6 5.6 0 1018.912.773a.753.753 0 00-.783 1.188z"
    />
  );

export default SvgLightModeNightWoman;
