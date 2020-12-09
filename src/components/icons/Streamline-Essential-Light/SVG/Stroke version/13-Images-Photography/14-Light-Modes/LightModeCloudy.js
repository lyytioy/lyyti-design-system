import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeCloudy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-cloudy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-cloudy_svg__a"
      d="M.5 14a4.991 4.991 0 015.18-4.991 6.989 6.989 0 0113.3 2.571 3.75 3.75 0 014.52 3.67c0 3.81-4 3.75-4 3.75H5S.5 18.414.5 14zM17 17l2.5-3.5M12.5 17l2.5-3.5"
    />
  );

export default SvgLightModeCloudy;
