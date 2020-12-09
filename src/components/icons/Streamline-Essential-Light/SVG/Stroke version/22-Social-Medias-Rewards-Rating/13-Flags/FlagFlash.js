import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagFlash = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-flash_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-flash_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.321-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1z"
    />,
    <path
      className="flag-flash_svg__a"
      d="M13.5 6.5l-3.94 4.588a.25.25 0 00.191.412H11.5v4l3.94-4.588a.25.25 0 00-.191-.412H13.5z"
    />
  );

export default SvgFlagFlash;
