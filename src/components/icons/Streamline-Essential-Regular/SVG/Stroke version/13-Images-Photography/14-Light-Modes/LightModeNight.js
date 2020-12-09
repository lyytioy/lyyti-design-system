import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeNight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-night_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-night_svg__a"
      d="M3.523 10.1a6.233 6.233 0 006.947 1.4"
    />,
    <circle className="light-mode-night_svg__a" cx={6.754} cy={12} r={3.75} />,
    <path
      className="light-mode-night_svg__a"
      d="M12.754 23.25a6.018 6.018 0 00-6-6 6.018 6.018 0 00-6 6M18.135 1.963a4.824 4.824 0 01.883 2.448 4.947 4.947 0 01-2.507 4.618 4.657 4.657 0 01-1.632.56.749.749 0 00-.269 1.378A5.613 5.613 0 1018.92.773a.754.754 0 00-.785 1.19z"
    />
  );

export default SvgLightModeNight;
