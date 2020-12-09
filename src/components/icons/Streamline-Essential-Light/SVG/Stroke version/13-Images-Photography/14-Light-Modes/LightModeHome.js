import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeHome = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-home_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-home_svg__a"
      d="M.5 20.75h23M12.5 20.75v-9.992h1.75a.25.25 0 00.25-.25.6.6 0 00-.177-.427L7.5 3.25.677 10.081a.6.6 0 00-.177.427.25.25 0 00.25.25H2.5v9.992z"
    />,
    <path
      className="light-mode-home_svg__a"
      d="M9.5 17.75a1 1 0 00-1-1h-2a1 1 0 00-1 1v3h4zM16.5 12.258l-2 2M18.75 14.508l-4.25 4.25M21 16.758l-2 2"
    />
  );

export default SvgLightModeHome;
