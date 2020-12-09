import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeSunny = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-sunny_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="light-mode-sunny_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="light-mode-sunny_svg__a"
      d="M12 1v5M12 18v5M18 12h5M1 12h5M6.343 6.343l1.414 1.414M4 12h2M17.657 17.658l-1.414-1.414M6.342 17.657l1.414-1.414M17.658 6.343l-1.414 1.414"
    />
  );

export default SvgLightModeSunny;
