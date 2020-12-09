import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDirectionButtonArrows = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".direction-button-arrows_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="direction-button-arrows_svg__a"
      d="M12 .998v22M23 11.998H1M4 8.998l-3 3 3 3M9 19.998l3 3 3-3M20 14.998l3-3-3-3M15 3.998l-3-3-3 3"
    />
  );

export default SvgDirectionButtonArrows;
