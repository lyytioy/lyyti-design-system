import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-home_svg__a"
      d="M.75 18.938h22.5M2.25 18.938V9.187l5.1-3.825a1.5 1.5 0 011.8 0l5.1 3.825v9.751M19.5 9.937l-2.25 2.251M18.75 15.938l4.5-4.501"
    />,
    <path
      className="light-mode-home_svg__a"
      d="M9.75 15.938a1.5 1.5 0 00-3 0v3h3z"
    />
  );

export default SvgLightModeHome;
