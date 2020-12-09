import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLightModeNight = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".light-mode-night_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="light-mode-night_svg__a"
      d="M.5 23.414a8.719 8.719 0 01.7-3.322c.49-.981 2.539-1.661 5.111-2.613.695-.258.581-2.074.273-2.413a5.127 5.127 0 01-1.336-3.978A3.354 3.354 0 018.5 7.414a3.354 3.354 0 013.256 3.674 5.127 5.127 0 01-1.336 3.978c-.308.339-.422 2.155.273 2.413 2.572.952 4.621 1.632 5.111 2.613a8.719 8.719 0 01.7 3.322zM19.436.6a.5.5 0 00-.559.741 5.524 5.524 0 01-3.754 8.222.5.5 0 00-.193.908A5.5 5.5 0 1019.436.6z"
    />
  );

export default SvgLightModeNight;
