import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButtonArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-arrows_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-arrows_svg__a"
      d="M9 3.748l3-3 3 3M15 20.248l-3 3-3-3M12 .748v22.5M3.75 14.998l-3-3 3-3M20.25 8.998l3 3-3 3M.75 11.998h22.5"
    />
  );

export default SvgDirectionButtonArrows;
