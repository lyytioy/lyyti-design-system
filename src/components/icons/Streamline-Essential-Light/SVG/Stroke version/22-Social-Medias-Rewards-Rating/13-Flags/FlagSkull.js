import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagSkull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-skull_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-skull_svg__a"
      d="M.5 23.5V.5M.5 19.5a21.794 21.794 0 016-1c3 0 7.5 2 10.5 2a18.515 18.515 0 005.849-1.244 1 1 0 00.651-.938V4.44a1 1 0 00-1.32-.947A17.367 17.367 0 0117 4.5c-3 0-7.5-2-10.5-2a21.794 21.794 0 00-6 1v16zM12 14v1.5"
    />,
    <path
      className="flag-skull_svg__a"
      d="M9.5 15.5v-1.876a4 4 0 115 0V15.5"
    />,
    <path
      className="flag-skull_svg__a"
      d="M10.25 10a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.75 10a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgFlagSkull;
